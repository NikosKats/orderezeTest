import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import MediaCard from './MediaCard'
import {Container,Row, Col} from 'react-bootstrap'


const api = axios.create({
    baseURL: 'https://pagesmanagement.azurewebsites.net/'
  })
  

class View extends Component {

    state = {
        pages: []
    }

    constructor(){
        super();
        this.getPages();
    }

    getPages = async () => {
        let data = await api.get('/api/ResponsivePages').then(({ data }) => data);
        
        this.setState({ 
            pages: data,
            count: data.length
        })
    }

    render(){
        return(

            
                <div className="App">

                        
                        
                        {this.state.pages.map( pages =>  { return (
                            <div>
                                <Container>
                                    <Row>
                                        <Col>
                                            <MediaCard 
                                                key = {pages.id}
                                                title = {pages.title} 
                                                description = {pages.description} 
                                                published = {pages.publishedOn} 
                                                type = {pages.type} 
                                                active = {pages.isActive} 
                                            />
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        )}
                    )}
                </div>
            
        );
    }
   
}

export default View;