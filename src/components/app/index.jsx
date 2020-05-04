import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import App from './app';
import {initializeApp} from '../../reducer/appReducer';

const AppContainer = (props) => {
    useEffect(() => {
        props.initializeApp();
    });

    return props.initialised ? <App {...props}/> : null
};

let mapStateToProps = (state) => {
    return {
        initialised: state.app.initialised,
        API: state.app.API,
        timeStamp: state.app.timeStamp
    }
};

export default connect(mapStateToProps, {initializeApp})(AppContainer);