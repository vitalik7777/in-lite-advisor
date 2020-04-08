import React from 'react';
import {connect} from 'react-redux';
import FirstStep from './firstStep';
import {withNamespaces} from 'react-i18next';

const FirstStepContainer = (props) => {
    return (
        <FirstStep {...props}/>
    )
};

let mapStateToProps = (state) => {
    return {
        isFetching: state.fetching.isFetching,
    }
};

const firstStepContainer = withNamespaces()(FirstStepContainer);

export default connect(mapStateToProps, {})(firstStepContainer);