import React, {Component} from 'react';

import store from './store'

import {Provider} from 'react-redux'

import{
    CartList
} from "./componets";


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <CartList />
                </div>
            </Provider>
        );
    }
}

export default App;