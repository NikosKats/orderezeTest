import React, {Component} from "react";
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://pagesmanagement.azurewebsites.net/'
  })
  

class App extends Component {

    constructor(){
        super();
        api.get('/').then(res => {
            console.log(res.data)
        })
    }

    render(){
        return(
            <div className="App">
                Hello React!
            </div>
        );
    }
   
}

export default App;