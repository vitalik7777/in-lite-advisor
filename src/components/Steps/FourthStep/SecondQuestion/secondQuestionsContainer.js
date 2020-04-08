import React from 'react';
import {connect} from 'react-redux';
import QuestionWrapper from '../questionWrapper';
import {withNamespaces} from 'react-i18next';

import {setValue, setIDLastCategory, setIndexCompletedQuestion} from '../../../../reducer/questionReducer';

const SecondQuestionsContainerWithNamespaces = (props) => {
    let index = 2;

    return (
        <QuestionWrapper index={index} {...props}/>
    )
};

let mapStateToProps = (state) => {
    return {
        selectedElement: state.gardenElementsStep.selectedGardenElement,
        selectedValue: state.questionsStep.selectedValue,
        idFirstSelectedCategory: state.questionsStep.idFirstSelectedCategory
    }
};

const SecondQuestionsContainer = withNamespaces()(SecondQuestionsContainerWithNamespaces);

export default connect(mapStateToProps, {setValue, setIDLastCategory, setIndexCompletedQuestion})(SecondQuestionsContainer);