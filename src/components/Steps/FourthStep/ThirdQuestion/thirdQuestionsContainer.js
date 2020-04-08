import React from 'react';
import {connect} from 'react-redux';
import QuestionWrapper from "../questionWrapper";
import {withNamespaces} from 'react-i18next';

import {setValue, setIDLastCategory, setIndexCompletedQuestion} from '../../../../reducer/questionReducer';

const ThirdQuestionsContainerWithNamespaces = (props) => {
    let index = 3;

    return (
        <QuestionWrapper index={index} {...props}/>
    )
};

let mapStateToProps = (state) => {
    return {
        gardenElements: state.gardenElementsStep.gardenElements,
        selectedElement: state.gardenElementsStep.selectedGardenElement,
        selectedValue: state.questionsStep.selectedValue,
        idFirstSelectedCategory: state.questionsStep.idFirstSelectedCategory
    }
};

const ThirdQuestionsContainer = withNamespaces()(ThirdQuestionsContainerWithNamespaces);

export default connect(mapStateToProps, {setValue, setIDLastCategory, setIndexCompletedQuestion})(ThirdQuestionsContainer);