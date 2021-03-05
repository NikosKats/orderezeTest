import React from "react";
import ReactDOM from "react-dom";
import View from './components/View';
import Create from './components/Create'
import Edit from './components//Edit'
import Welcome from './components//Welcome'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


ReactDOM.render(
    <Router>
        <Route path="/" component={Welcome}/>
        <Route path="/view" component={View} />
        <Route path="/create" component={Create} />
        <Route path="/edit/:id" component={Edit} /> 
    </Router>
  ,
  document.querySelector('#root')
);