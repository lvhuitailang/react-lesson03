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
    let tempItem = {};
    if(action && action.type && action.payload){
        let tempArrState = state.filter(v=>{
            return v.id === action.payload.id
        });
        if(tempArrState && tempArrState.length > 0){
            tempItem = tempArrState[0];
        }
    }
    switch (action.type) {
        case actionType.CART_AMOUNT_INCREASEMENT:
            tempItem.amount =  tempItem.amount+1;
            return state;
        case actionType.CART_AMOUNT_DECREASEMENT:
            tempItem.amount =  tempItem.amount-1;
            return state;
        default:return initState;
    }

}