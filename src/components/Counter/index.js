import React,{Component} from "react";
import {CounterConsumer} from "../../counterStore";

class Counter extends Component {
    render() {
        return (
            <CounterConsumer>
                {
                    (orgs)=>{
                        return(
                            <span>{orgs.count}</span>
                        )
                    }
                }
            </CounterConsumer>

        );
    }
}

export default Counter;

