import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import {Container, Form, Row, Col, Button} from 'react-bootstrap'
import ControlledOpenSelect from './ControlledOpenSelect'
import { ControlCameraOutlined } from "@material-ui/icons";
import moment from 'moment'



const api = axios.create({
    baseURL: 'https://pagesmanagement.azurewebsites.net/'
})

class Create extends Component {

    constructor(){
        super();

        this.state = {
            title: '',
            description: '',
            type: 0,
            isActive: true,
            published: moment(Date()).format()

        }

        
    }


    handleInputChange = (event) => {
        event.preventDefault();
        console.log(event);
        console.log(event.target.name);
        console.log(event.target.value);

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
    
        console.log(this.state)

        const data = {
            title: "null",
            description: "null",
            type: 2,
            isActive: true,
            published: moment(Date()).format()
        };

        api.post('api/ResponsivePages', data)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error.response)
        })

    }
    
    

    render(){

        const { title, description, type, isActive} = this.state

        return(
            <div>
                <h1 className="text-center" style={{marginTop:15,marginBottom: 15}}>Create New Page</h1>
                <Container>
                    <Form onSubmit={this.handleSubmit}>

                        <Row style={{marginTop:15,marginBottom: 15}}>
                            <Col>
                                <Form.Label>Title</Form.Label>
                                <Form.Control placeholder="Title" name="title" value={title} onChange = {this.handleInputChange} />
                            </Col>
                            <Col>
                                <Form.Label>Description</Form.Label>
                                <Form.Control placeholder="Description" name="description" value={description}  onChange = {this.handleInputChange} />
                            </Col>
                        </Row>

                        <Row style={{marginTop:15,marginBottom: 15}}>
                            <Col>
                                <Form.Label>Page Type</Form.Label>
                                <ControlledOpenSelect/>
                            </Col>
                            <Col>
                            
                                <Form.Label> Is Page Active </Form.Label>
                                <Row sm={10} >

                                    <Form.Check
                                        type="radio"
                                        label="Active"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                        style={{marginLeft:15,marginRight: 15}}
                                    />

                                    <Form.Check
                                        type="radio"
                                        label="Not Active"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                        style={{marginLeft:15,marginRight: 15}}
                                    />
                                </Row>
                            
                                
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label>Published</Form.Label>
                                <Form.Control placeholder={moment(Date()).format()} disabled/>
                            </Col>
                        </Row>

                        <Button type="submit" variant="primary" size="lg" block style={{marginTop:30}}>
                            Submit Page
                        </Button>

                    </Form>
                </Container>
            </div>
    )}
}

export default Create;