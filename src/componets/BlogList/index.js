import React, {Component} from 'react';
import {connect} from 'react-redux'

import BlogItem from "./BlogItem";
import {fetchBlogList} from '../../actions/blog'

class BlogList extends Component {

    componentDidMount() {
        this.props.fetchBlogList();
    }

    render() {
        console.log(this.props)
        const {
            list,
            isloading,
            errorMsg
        } = this.props;

        return (
            isloading
            ?
            <div>loading...</div>
            :
                errorMsg && errorMsg!=''
                ?
                <div>{errorMsg}</div>
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
    isloading:state.blog.isloading,
    errorMsg:state.blog.errorMsg


})

export default connect(mapToProps, {fetchBlogList})(BlogList);