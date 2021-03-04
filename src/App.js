import React, {Component} from "react";
import axios from 'axios'
import MediaCard from './MediaCard'

const api = axios.create({
    baseURL: 'https://pagesmanagement.azurewebsites.net/'
  })
  

class App extends Component {

    state = {
        pages: []
    }

    constructor(){
        super();
        this.getPages();
    }

    getPages = async () => {
        let data = await api.get('/api/ResponsivePages').then(({ data }) => data);
        
        this.setState({ pages: data})
    }

    render(){
        return(
            <div className="App">

                {this.state.pages.map( pages =>  { return (
                    <div>
                        <MediaCard 
                        title = {pages.title} 
                        description = {pages.description} 
                        published = {pages.publishedOn} 
                        type = {pages.type} 
                        active = {pages.isActive} 
                        />
                    </div>
                )}
                
                )}
                

            </div>
        );
    }
   
}

export default App;