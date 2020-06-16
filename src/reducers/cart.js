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

/*
//js里面 foreach filter等等，不能改变原来数组的引用地址，只能改变每个item里面的值
export default (state = initState,action)=>{
    console.log(state)
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
            return state.map(item=>{
                if(item.id === action.payload.id){
                    item.amount+=1;
                }
                return item;
            })
        case actionType.CART_AMOUNT_DECREASEMENT:
            tempItem.amount =  tempItem.amount-1;
            return state;
            return state.map(item=>{
                if(item.id === action.payload.id){
                    item.amount-=1;
                }
                return item;
            })
        default:return state;
    }

}*/
