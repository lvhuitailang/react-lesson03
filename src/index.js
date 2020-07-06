import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router,Route} from 'react-router-dom'

import App from "./App";


ReactDOM.render(
    <Router>
        <Route component={App} path={'/'}/>
    </Router>
    ,
    document.querySelector('#root')
);
