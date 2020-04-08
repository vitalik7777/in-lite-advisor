import React from 'react';
import {connect} from 'react-redux';
import QuestionWrapper from '../questionWrapper';
import {withNamespaces} from 'react-i18next';

import {
    setValue,
    setIDLastCategory,
    setIndexCompletedQuestion,
    setIdFirstSelectedQuestion
} from '../../../../reducer/questionReducer';

const FirstQuestionsContainerWithNamespaces = (props) => {
    let index = 1;

    return (
        <QuestionWrapper index={index} {...props}/>
    )
};

let mapStateToProps = (state) => {
    return {
        gardenElements: state.gardenElementsStep.gardenElements,
        selectedElement: state.gardenElementsStep.selectedGardenElement,
        idFirstSelectedCategory: state.questionsStep.idFirstSelectedCategory
    }
};

const FirstQuestionsContainer = withNamespaces()(FirstQuestionsContainerWithNamespaces);

export default connect(mapStateToProps, {
    setValue,
    setIDLastCategory,
    setIndexCompletedQuestion,
    setIdFirstSelectedQuestion
})(FirstQuestionsContainer);