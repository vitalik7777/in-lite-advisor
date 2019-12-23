import React from 'react';
import {connect} from 'react-redux';
import Step5 from './main';


const SummaryContainer = (props) => {
    return (
        <Step5 {...props}/>
    )
};

let mapStateToProps = (state) => {
    return {
        selectedValue: state.questionsStep.selectedValue,
    }
};

export default connect(mapStateToProps, {})(SummaryContainer);