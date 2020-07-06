import React, {Component} from 'react';
import {Route,NavLink as Link,Redirect,Switch} from 'react-router-dom'

import {
    Home,
    Article,
    Users,
    ArticleDetail,
    NotFound
}from './views'


class App extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to={'/home'} >首页</Link> </li>
                    <li><Link to={'/article'} >文章</Link> </li>
                    <li><Link to={'/users'} >用户</Link> </li>
                </ul>
                <Switch>
                    <Route path={'/home'} component={Home}/>
                    <Route path={'/article'} component={Article} exact/>
                    <Route component={ArticleDetail} path={'/article/:id'}/>
                    <Route path={'/users'} component={Users}/>
                    <Route path={'/404'} component={NotFound}/>

                    <Redirect from={'/'} to={'/home'} exact/>
                    <Redirect  to={'/404'} exact/>
                </Switch>
            </div>
        );
    }
}

export default App;