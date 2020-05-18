import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/app';
import {Provider} from "react-redux";
import store from "./reduxStore/store";


ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>, document.getElementById('root')
);