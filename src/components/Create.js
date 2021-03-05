import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import {Container, Form, Row, Col, Button} from 'react-bootstrap'
import ControlledOpenSelect from './ControlledOpenSelect'

class Create extends Component {

    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <h1 className="text-center" style={{marginTop:15,marginBottom: 15}}>Create New Page</h1>
                <Container>
                    <Form>

                        <Row style={{marginTop:15,marginBottom: 15}}>
                            <Col>
                                <Form.Label>Title</Form.Label>
                                <Form.Control placeholder="Title" />
                            </Col>
                            <Col>
                                <Form.Label>Description</Form.Label>
                                <Form.Control placeholder="Description" />
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
                                <Form.Control placeholder="Published" disabled/>
                            </Col>
                        </Row>

                        <Button variant="primary" size="lg" block style={{marginTop:30}}>
                            Submit Page
                        </Button>

                    </Form>
                </Container>
            </div>
    )}
}

export default Create;