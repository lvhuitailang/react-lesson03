import Axios from "axios";

const ajax = Axios.create({
    baseURL:'http://jsonplaceholder.typicode.com/'
})

export const getPosts = ()=>{
    return ajax.get('posts')
}