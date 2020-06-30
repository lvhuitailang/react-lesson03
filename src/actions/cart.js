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
export const decreamentAsync = (id)=>{
    setTimeout(()=>{
        return {
            type:actionType.CART_AMOUNT_DECREASEMENT,
            payload:{
                id:id
            }
        }
    },2000)


}