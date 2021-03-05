import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import {Container, Form, Row, Col} from 'react-bootstrap'
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
                                <Form.Label>Published</Form.Label>
                                <Form.Control placeholder="Published" disabled />
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
    )}
}

export default Create;