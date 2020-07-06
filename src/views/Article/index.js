import React, {Component} from 'react';
import {NavLink as Link,Route} from 'react-router-dom'



class Article extends Component {
    render() {
        return (
            <div>
                <Link to={'/article/1'}>文章1</Link>
                <Link to={'/article/2'}>文章2</Link>
            </div>
        );
    }
}

export default Article;