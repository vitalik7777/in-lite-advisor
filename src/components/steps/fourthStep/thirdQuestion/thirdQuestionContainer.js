import React from 'react';
import {connect} from 'react-redux';
import QuestionWrapper from "../questionWrapper";

import {setNestedQuestion, setIDLastCategory, setIndexCompletedQuestion} from '../../../../reducer/questionReducer';

const ThirdQuestionsContainer = (props) => {
    let index = 3;

    return (
        <QuestionWrapper index={index} {...props}/>
    )
};

let mapStateToProps = (state) => {
    return {
        gardenElements: state.gardenElementsStep.gardenElements,
        selectedGardenElement: state.gardenElementsStep.selectedGardenElement,
        selectedNestedElement: state.questionsStep.selectedNestedElement,
        idFirstSelectedAnswer: state.questionsStep.idFirstSelectedAnswer
    }
};

export default connect(mapStateToProps, {setNestedQuestion, setIDLastCategory, setIndexCompletedQuestion})(ThirdQuestionsContainer);
