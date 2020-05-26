import React, {useContext} from 'react';
import {connect} from 'react-redux';
import QuestionWrapper from '../questionWrapper';

import {setNestedQuestion, setIDLastCategory, setIndexCompletedQuestion} from '../../../../reducer/questionReducer';
import StepContext from "../../../../context/stepsContext";

const SecondQuestionsContainer = ({selectedNestedElement, ...props}) => {
    const {previous} = useContext(StepContext);
    const question = selectedNestedElement.children_data[0];

    const handlePrevious = () => {
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
        selectedNestedElement: state.questionsStep.selectedNestedElement
    }
};

export default connect(mapStateToProps, {
    setNestedQuestion,
    setIDLastCategory,
    setIndexCompletedQuestion
})(SecondQuestionsContainer);
