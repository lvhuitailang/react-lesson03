import React, {Component} from 'react';

import {connect} from 'react-redux'

import BlogItem from "./BlogItem";
import {getPosts} from '../../services/index'

class BlogList extends Component {

    componentDidMount() {
        getPosts().then(res=>{
            console.log(res)
        })
    }

    render() {
        console.log(this.props)
        const {
            list,
            isloading
        } = this.props;

        return (
            isloading
            ?
            <div>loading...</div>
            :
            <ul>
                {list.map(item=>{
                    return (
                        <BlogItem key={item.id} {...item}></BlogItem>
                    )
                })}
            </ul>
        );
    }
}

const mapToProps = state => ({
    list:state.blog.list,
    isloading:state.blog.isloading


})

export default connect(mapToProps)(BlogList);