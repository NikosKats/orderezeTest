import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import {Container, Form, Row, Col, Button} from 'react-bootstrap'
import ControlledOpenSelect from './ControlledOpenSelect'
import moment from 'moment'

const api = axios.create({
    baseURL: 'https://pagesmanagement.azurewebsites.net/'
})



class Edit extends Component {

    state = {
        id: this.props.match.params.id,
        title: '',
        description: '',
        type: 0,
        isActive: false,
        publishedOn: moment(Date()).format()
    }

    constructor(props){
        super(props);
        this.getPages();
        
    }

    
    handleInputChange = (event) => {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    getPages = async () => {
        
        api.get('/api/ResponsivePages/'+this.state.id)
        .then(response => {
            if(response.data != null){
                this.setState({
                    id: response.data.id,
                    title: response.data.title,
                    description: response.data.description,
                    type: response.data.type,
                    isActive: response.data.isActive,
                    publishedOn: response.data.publishedOn
                });
            }
        }).catch((error) => {
            console.error("Error . " + error);
        });

      
    }


    update = event => {
        event.preventDefault();

        console.log(this.state)

        const pages = {
            id: this.state.id,
            title: this.state.title,
            description: this.state.description,
            type: this.state.type,
            isActive: this.state.isActive,
            publishedOn: this.state.publishedOn
        }

        api.put('api/ResponsivePages/'+this.state.id, pages)
        .then(response => {
            console.log(response.status)

            if(response.status == 200){
                alert("success")
            }
        })
        .catch(error => {
            console.log(error.response)

            if(error.response.status >= 400){
                alert(error.response.statusText + " " + error.response.status)
            }

        })

    }

    render(){

        const { title, description, type, isActive} = this.state

        return(
            <div>
                
                <h1 className="text-center" style={{marginTop:15,marginBottom: 15}}>Edit Page '{this.state.title}'</h1>
                <Container>
                    <Form onSubmit={this.update}>

                        <Row style={{marginTop:15,marginBottom: 15}}>
                            <Col>
                                <Form.Label>Title</Form.Label>
                                <Form.Control placeholder={this.state.title} name="title" value={title} onChange = {this.handleInputChange} />
                            </Col>
                            <Col>
                                <Form.Label>Description</Form.Label>
                                <Form.Control placeholder={this.state.description} name="description" value={description}  onChange = {this.handleInputChange} />
                            </Col>
                        </Row>

                        <Row style={{marginTop:15,marginBottom: 15}}>
                            <Col>
                                <Form.Label>Page Type</Form.Label>
                                <ControlledOpenSelect/>
                            </Col>
                            <Col>
                            
                                <Form.Label> Is Page Active  </Form.Label>
                                <Row sm={10} >

                                    <Form.Check
                                        type="radio"
                                        label="Active"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                        style={{marginLeft:15,marginRight: 15}}
                                        checked = {this.state.isActive}
                                    />

                                    <Form.Check
                                        type="radio"
                                        label="Not Active"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                        style={{marginLeft:15,marginRight: 15}}
                                        checked = {this.state.isActive}
                                    />
                                </Row>
                            
                                
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label>Published</Form.Label>
                                <Form.Control placeholder={this.state.publishedOn} disabled/>
                            </Col>
                        </Row>

                        <Button type="submit" variant="primary" size="lg" block style={{marginTop:30}}>
                            Update Page
                        </Button>

                    </Form>
                </Container>
            </div>
    )}
}

export default Edit;