import React, {Component,createContext} from 'react';

const {
    Provider,
    Consumer:CounterConsumer
} = createContext()

class CounterProvider extends Component {
    constructor() {
        super();
        this.state = {
            count:100,
        }
    }
    increseFun = (op)=>{
        this.setState({count:'increasement' === op ? this.state.count+1:this.state.count-1})
    }

    render() {
        return (
            <div>
            <Provider value={{...this.state,...{increseFun:this.increseFun}}}>
                {this.props.children}
            </Provider>

        </div>
    );
    }
}

export  {
    CounterProvider,
    CounterConsumer
}