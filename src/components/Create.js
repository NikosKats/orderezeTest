import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import {Container, Form, Row, Col, Button} from 'react-bootstrap'
import ControlledOpenSelect from './ControlledOpenSelect'
import { ControlCameraOutlined } from "@material-ui/icons";


const api = axios.create({
    baseURL: 'https://pagesmanagement.azurewebsites.net/'
})

class Create extends Component {

    constructor(){
        super();

        this.state = {
            title: '',
            description: '',
            type: null,
            isActive: null,
            published: Date().toLocaleString()

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

        /**
         * const page = {
          title: this.state.title,
          description: this.state.description,
          type: 0,
          isActive: 1,
          publishedOn: Date().toLocaleString()
        };
        */

        
        
        /**
         * const page = {
            title: "test 1",
            description: "post test no2",
            type: 0,
            isActive: true,
            publishedOn: "2021-03-05T10:09:19.8029347+00:00"
          };
    
        api.post('api/ResponsivePages', { page })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
*/

      }
    
    

    render(){

        const { title, description, type, isActive} = this.state

        return(
            <div>
                <h1 className="text-center" style={{marginTop:15,marginBottom: 15}}>Create New Page</h1>
                <Container>
                    <Form onSubmit={this.handler}>

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
                                <Form.Control placeholder={Date().toLocaleString()} disabled/>
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