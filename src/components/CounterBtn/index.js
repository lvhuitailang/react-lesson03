import React,{Component} from "react";
import {CounterConsumer} from "../../counterStore";

class CounterBtn extends Component {
    render() {
        return (
            <CounterConsumer>
                {
                    (orgs)=>{
                        return(
                            <button onClick={()=>{orgs.increseFun(this.props.opType)}}>{this.props.children}</button>
                        )
                    }
                }
            </CounterConsumer>



        );
    }
}

export default CounterBtn;