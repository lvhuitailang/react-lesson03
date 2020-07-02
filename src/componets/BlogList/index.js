import React, {Component} from 'react';

import {connect} from 'react-redux'

import BlogItem from "./BlogItem";

class BlogList extends Component {
    render() {
        console.log(this.props)
        return (
            <ul>
                <BlogItem></BlogItem>
            </ul>
        );
    }
}


export default connect()(BlogList);