import React, {Component} from 'react';

import store from './store'

import{
    CartList
} from "./componets";


class App extends Component {
    render() {
        return (
            <div>
                <CartList store={store}/>
            </div>
        );
    }
}

export default App;