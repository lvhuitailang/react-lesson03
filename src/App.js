import React, {Component} from 'react';

import {
    Home,
    Article,
    Users
}from './views'


class App extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href={''} >首页</a> </li>
                    <li><a href={''} >文章</a> </li>
                    <li><a href={''} >用户</a> </li>
                </ul>
                <Home/>
                <Article/>
                <Users/>
            </div>
        );
    }
}

export default App;