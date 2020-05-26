import React, {useContext} from 'react';
import {connect} from 'react-redux';
import QuestionWrapper from "../questionWrapper";

import {setNestedQuestion, setIDLastCategory, setIndexCompletedQuestion} from '../../../../reducer/questionReducer';
import StepContext from "../../../../context/stepsContext";

const ThirdQuestionsContainer = (props) => {
    const {
        selectedNestedElement,
        setNestedQuestion,
        selectedElement,
        idFirstSelectedAnswer
    } = props;
    const {previous} = useContext(StepContext);
    const question = selectedNestedElement.children_data[0];

    const handlePrevious = () => {
        const secondLevel = selectedElement.children_data[0].children_data.find(item => item.id === idFirstSelectedAnswer);
        setNestedQuestion(secondLevel);
        previous();
    };

    return (
        <QuestionWrapper
            handlePrevious={handlePrevious}
            question={question}
            {...props}
        />
    )
};

let mapStateToProps = (state) => {
    return {
        selectedElement: state.questionsStep.selectedElement,
        selectedNestedElement: state.questionsStep.selectedNestedElement,
        idFirstSelectedAnswer: state.questionsStep.idFirstSelectedAnswer
    }
};

export default connect(mapStateToProps, {
    setNestedQuestion,
    setIDLastCategory,
    setIndexCompletedQuestion
})(ThirdQuestionsContainer);
