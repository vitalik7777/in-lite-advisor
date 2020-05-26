import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import App from './app';
import {initializeApp} from '../../reducer/appReducer';

const AppContainer = ({initializeApp, initialised, ...props}) => {
    useEffect(() => {
        initializeApp();
    }, [initializeApp]);

    return initialised ? <App {...props}/> : ''
};

let mapStateToProps = (state) => {
    return {
        initialised: state.app.initialised,
        API: state.app.API,
        tagManagerId: state.app.tagManagerId
    }
};

export default connect(mapStateToProps, {initializeApp})(AppContainer);
