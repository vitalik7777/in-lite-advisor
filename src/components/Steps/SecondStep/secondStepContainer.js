import React from 'react';
import {connect} from 'react-redux';
import SecondStep from './secondStep';
import {withNamespaces} from 'react-i18next';

const SecondStepContainerWithNamespaces = (props) => {
    return (
        <SecondStep {...props}/>
    )
};

let mapStateToProps = (state) => {
    return {
        isFetching: state.fetching.isFetching,
    }
};

const SecondStepContainer = withNamespaces()(SecondStepContainerWithNamespaces);

export default connect(mapStateToProps, {})(SecondStepContainer);