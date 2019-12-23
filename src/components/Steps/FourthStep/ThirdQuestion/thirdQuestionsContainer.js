import React from 'react';
import {connect} from 'react-redux';
import QuestionWrapper from "../questionWrapper";

import {setValue} from '../../../../reducer/questionReducer';

const ThirdQuestionsContainer = (props) => {
    let index = 2;

    return (
        <QuestionWrapper index={index} {...props}/>
    )
};

let mapStateToProps = (state) => {
    return {
        questions: state.gardenElementsStep.questions,
        selectedElement: state.gardenElementsStep.selectedGardenElement,
        selectedValue: state.questionsStep.selectedValue,
    }
};

export default connect(mapStateToProps, {setValue})(ThirdQuestionsContainer);