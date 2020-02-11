import React from 'react';
import {connect} from 'react-redux';
import FirstStep from './firstStep';
import {withNamespaces} from 'react-i18next';

const FirstStepContainerWithNamespaces = (props) => {
    return (
        <FirstStep {...props}/>
    )
};

let mapStateToProps = (state) => {
    return {
        isFetching: state.fetching.isFetching,
    }
};

const FirstStepContainer = withNamespaces()(FirstStepContainerWithNamespaces);

export default connect(mapStateToProps, {})(FirstStepContainer);