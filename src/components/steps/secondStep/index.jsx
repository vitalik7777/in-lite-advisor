import React from 'react';
import {connect} from 'react-redux';
import SecondStep from './secondStep';

const SecondStepContainer = (props) => {
    return (
        <SecondStep {...props}/>
    )
};

let mapStateToProps = (state) => {
    return {
        isFetching: state.fetching.isFetching,
    }
};


export default connect(mapStateToProps, {})(SecondStepContainer);