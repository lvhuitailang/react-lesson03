import React,{Component} from "react";
import {
    CounterProvider,
    CounterConsumer
} from "./counterStore";

import
{
    Counter,
    CounterBtn
}
from "./components";



class App extends Component {
    render() {
        return (
           <CounterProvider>
               <CounterBtn opType={'decreasement'}>-</CounterBtn>
               <Counter/>
               <CounterBtn opType={'increasement'}>+</CounterBtn>
           </CounterProvider>
        );
    }
}

export default App;

