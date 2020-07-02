import actionType from './actionType'

export const increament = (id)=>{
    return {
        type:actionType.CART_AMOUNT_INCREASEMENT,
        payload:{
            id:id
        }
    }

}
export const decreament = (id)=>{
    return {
        type:actionType.CART_AMOUNT_DECREASEMENT,
        payload:{
            id:id
        }
    }

}

//异步action，使用redux-thunk之后就可以在这里return 一个function，参数是dispach
/*
export const decreamentAsync = (id)=>{
    return(dispach)=>{
        setTimeout(()=>{
            dispach (decreament(id));
        },2000)
    }

}*/

export const decreamentAsync = id => dispach => {
    setTimeout(()=>{
        dispach (decreament(id));
    },2000)
}
