import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import {Container, Form, Row, Col, Button} from 'react-bootstrap'
import ControlledOpenSelect from './ControlledOpenSelect'


const api = axios.create({
    baseURL: 'https://pagesmanagement.azurewebsites.net/'
})



class Edit extends Component {

    state = {
        pages: [],
        id: this.props.match.params.id
    }

    constructor(props){
        super(props);
        this.getPages();
        
    }

    

    getPages = async () => {
        let data = await api.get('/api/ResponsivePages/'+this.state.id).then(({ data }) => data);
        
        this.setState({ 
            pages: data,
            count: data.length
        })
    }

    render(){
        
        return(
            <div>
                
                <h1 className="text-center" style={{marginTop:15,marginBottom: 15}}>Edit Page '{this.state.pages.title}'</h1>
                <Container>
                    <Form>

                        <Row style={{marginTop:15,marginBottom: 15}}>
                            <Col>
                                <Form.Label>Title</Form.Label>
                                <Form.Control placeholder={this.state.pages.title} />
                            </Col>
                            <Col>
                                <Form.Label>Description</Form.Label>
                                <Form.Control placeholder={this.state.pages.description} />
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
                                        checked = {this.state.pages.isActive}
                                    />

                                    <Form.Check
                                        type="radio"
                                        label="Not Active"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                        style={{marginLeft:15,marginRight: 15}}
                                        checked = {this.state.pages.isActive}
                                    />
                                </Row>
                            
                                
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label>Published</Form.Label>
                                <Form.Control placeholder={this.state.pages.publishedOn} disabled/>
                            </Col>
                        </Row>

                        <Button variant="primary" size="lg" block style={{marginTop:30}}>
                            Update Page
                        </Button>

                    </Form>
                </Container>
            </div>
    )}
}

export default Edit;