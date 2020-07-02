import actionType from "./actionType";

const startFetchBlogList = ()=>{
    return {
        type:actionType.START_FECCH_BLOG_LIST
    }

}
const successFetchBlogList = ()=>{
    return {
        type:actionType.SUCCESS_FECCH_BLOG_LIST
    }

}
const failedFetchBlogList = ()=>{
    return {
        type:actionType.FAILED_FECCH_BLOG_LIST
    }

}

export const fetchBlogList = () => dispach => {
    dispach(startFetchBlogList());


}