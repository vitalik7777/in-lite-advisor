import React from 'react';
import {connect} from 'react-redux';
import {FirstQuestion} from './questionsSteps/firstQuestion';

import {setQuestionsAC} from '../../../reducer/questionReducer';

const QuestionsContainer = (props) => {
    return (
        <Connected {...props}/>
    )
};

let mapStateToProps = (state) => {
    return {
        attributes: state.questionsStep.attributesGroupe,
        questions: state.questionsStep.questions,
        selectedElement: state.gardenElementsStep.selectedGardenElement
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setQuestions: (selectedElement, questions) => {
            dispatch(setQuestionsAC(selectedElement, questions));
        },
    }
};

const Connected = connect(mapStateToProps, mapDispatchToProps)(FirstQuestion);

export default QuestionsContainer;