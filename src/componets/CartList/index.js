import React, {Component} from 'react';

import {increament,decreament} from '../../actions/cart'

class CartList extends Component {
    constructor() {
        super();
        this.state = {
            cartList:[]
        }
    }

    listenerSetState = ()=>{
        this.setState(()=>{
            return {
                cartList:this.props.store.getState().cart
            }
        })
    }

    componentDidMount() {
      this.listenerSetState();
      this.props.store.subscribe(this.listenerSetState);
    }

    render() {
        console.log('rendered')
        return (
            <>
             <table>
                 <thead>
                    <tr>
                        <th>id</th>
                        <th>名称</th>
                        <th>单价</th>
                        <th>数量</th>
                        <th>操作</th>
                    </tr>
                 </thead>
                 <tbody>
                 {
                     this.state.cartList.map(item=>{
                         return <tr key={item.id}>
                                     <td>{item.id}</td>
                                     <td>{item.title}</td>
                                     <td>{item.price}</td>
                                     <td>
                                         <button onClick={
                                             ()=>{
                                                 this.props.store.dispatch(decreament(item.id));
                                             }
                                         }>-</button>
                                         <span>{item.amount}</span>
                                         <button onClick={
                                             ()=>{
                                                 this.props.store.dispatch(increament(item.id));
                                             }
                                         }>+</button>
                                     </td>
                                     <td></td>
                                </tr>
                     })
                 }

                 </tbody>
             </table>
            </>
        );
    }
}

export default CartList;