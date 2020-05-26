import React, {useContext, useEffect} from 'react';
import {connect} from 'react-redux';
import QuestionWrapper from '../questionWrapper';

import {
    getQuestions,
    setNestedQuestion,
    setIDLastCategory,
    setIndexCompletedQuestion,
    setIdFirstSelectedAnswer
} from '../../../../reducer/questionReducer';

import LoadingSpinner from "../../../loadingSpinner/loadingSpinner";
import StepContext from "../../../../context/stepsContext";

const FirstQuestionsContainer = ({selectedElement, ...props}) => {
    const {previous} = useContext(StepContext);
    const indexQuestion = 1;
    let question;

    useEffect(() => {
        props.getQuestions(props.gardenElements, props.selectedGardenElementId);
    }, [selectedElement]);

    const handlePrevious = () => {
        previous();
    };

    if (selectedElement.length === 0) {
        return <LoadingSpinner/>;
    } else {
        question = selectedElement.children_data[0]
    }

    return (
        <QuestionWrapper
            handlePrevious={handlePrevious}
            question={question}
            indexQuestion={indexQuestion}
            selectedElement={selectedElement}
            {...props}
        />
    )
};

let mapStateToProps = (state) => {
    return {
        selectedElement: state.questionsStep.selectedElement,
        gardenElements: state.gardenElementsStep.gardenElements,
        selectedGardenElementId: state.gardenElementsStep.selectedGardenElementId
    }
};

export default connect(mapStateToProps, {
    getQuestions,
    setNestedQuestion,
    setIDLastCategory,
    setIndexCompletedQuestion,
    setIdFirstSelectedAnswer
})(FirstQuestionsContainer);
