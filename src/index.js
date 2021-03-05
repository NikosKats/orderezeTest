import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import Create from './components/Create'
import Edit from './components//Edit'
import Welcome from './components//Welcome'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


ReactDOM.render(
    <Router>
        <Route path="/" component={Welcome}/>
        <Route path="/home" component={App} />
        <Route path="/create" component={Create} />
        <Route path="/edit" component={Edit} /> 
    </Router>
  ,
  document.querySelector('#root')
);