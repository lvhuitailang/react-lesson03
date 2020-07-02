import actionType from "./actionType";
import {getPosts} from '../services/index'

const startFetchBlogList = () => {
    return {
        type: actionType.START_FECCH_BLOG_LIST
    }

}
const successFetchBlogList = (payload) => {
    return {
        type: actionType.SUCCESS_FECCH_BLOG_LIST,
        payload
    }

}
const failedFetchBlogList = (payload) => {
    return {
        type: actionType.FAILED_FECCH_BLOG_LIST,
        payload
    }

}

export const fetchBlogList = () => dispach => {
    dispach(startFetchBlogList());
    getPosts()
        .then(res => {
            // console.log(res)
            if(res && res.status === 200){
                dispach(successFetchBlogList({list:res.data}));
            }else{
                dispach(failedFetchBlogList({errorMsg:'出错啦'}));
            }
        })
        .catch(err => {
            console.error(err);
            dispach(failedFetchBlogList({errorMsg:'出错啦'}));

        })

}