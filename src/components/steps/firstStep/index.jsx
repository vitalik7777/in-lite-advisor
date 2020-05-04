import React from 'react';
import {connect} from 'react-redux';
import FirstStep from './firstStep';

const firstStepContainer = (props) => {
    return (
        <FirstStep {...props}/>
    )
};

let mapStateToProps = (state) => {
    return {
        isFetching: state.fetching.isFetching,
    }
};

export default connect(mapStateToProps, {})(firstStepContainer);