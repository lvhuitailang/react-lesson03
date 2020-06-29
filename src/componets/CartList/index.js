import React, {Component} from 'react';

import {increament,decreament} from '../../actions/cart'

import {connect} from 'react-redux'

class CartList extends Component {
    constructor() {
        super();
     /*   this.state = {
            cartList:[]
        }*/
    }

/*    listenerSetState = ()=>{
        this.setState(()=>{
            return {
                cartList:this.props.cartList
            }
        })
    }

    componentDidMount() {
      this.listenerSetState();
      // this.props.store.subscribe(this.listenerSetState);
    }*/

    render() {
        console.log(this.props)
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
                     this.props.cartList.map(item=>{
                         return <tr key={item.id}>
                                     <td>{item.id}</td>
                                     <td>{item.title}</td>
                                     <td>{item.price}</td>
                                     <td>
                                         <button onClick={this.props.decreament.bind(this,item.id)}>-</button>
                                         <span>{item.amount}</span>
                                         <button onClick={this.props.increament.bind(this,item.id)}>+</button>
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

const mapStateToProp = (state)=>{
    return {
        cartList:state.cart
    }
}

/*const mapDispatchToProps = (dispatch)=>{
    return {
        add:(id)=>{
            return dispatch(increament(id))
        },
        reduce:(id)=>{
            return dispatch(decreament(id))
        }
    }
}*/
//这里的action用action creator的格式写的，所以可以直接传，不用像上面那样封装,redux会自动帮我们处理了

export default connect(mapStateToProp,{increament,decreament})(CartList);