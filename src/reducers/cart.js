import actionType from '../actions/actionType'

const initState = [{
        id:1,
        title:'苹果',
        price:10,
        amount:5
    },{
        id:2,
        title:'苹果',
        price:10,
        amount:5
    }];


export default (state = initState,action)=>{
    console.log(state)
    switch (action.type) {
        case actionType.CART_AMOUNT_INCREASEMENT:
            return state.map(item=>{
                if(item.id === action.payload.id){
                    item.amount+=1;
                }
                return item;
            })
        case actionType.CART_AMOUNT_DECREASEMENT:
            return state.map(item=>{
                if(item.id === action.payload.id){
                    item.amount-=1;
                }
                return item;
            })
        default:return state;
    }

}