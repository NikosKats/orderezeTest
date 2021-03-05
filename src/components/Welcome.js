import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from './AppBar'


class Welcome extends Component {

    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <AppBar title="Dashboard"/>
            </div>
    )}
}

export default Welcome;