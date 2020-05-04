import React from 'react';
import {connect} from 'react-redux';
import QuestionWrapper from '../questionWrapper';

import {
    setNestedQuestion,
    setIDLastCategory,
    setIndexCompletedQuestion,
    setIdFirstSelectedAnswer
} from '../../../../reducer/questionReducer';

const FirstQuestionsContainer = (props) => {
    let index = 1;

    return (
        <QuestionWrapper index={index} {...props}/>
    )
};

let mapStateToProps = (state) => {
    return {
        gardenElements: state.gardenElementsStep.gardenElements,
        selectedGardenElement: state.gardenElementsStep.selectedGardenElement
    }
};

export default connect(mapStateToProps, {
    setNestedQuestion,
    setIDLastCategory,
    setIndexCompletedQuestion,
    setIdFirstSelectedAnswer
})(FirstQuestionsContainer);