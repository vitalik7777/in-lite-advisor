import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/app';
import {Provider} from "react-redux";
import store from "./reduxStore/store";
import './utils/i18n';

import './index.css';


ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>, document.getElementById('root')
);

