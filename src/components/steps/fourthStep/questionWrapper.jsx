import React, {useContext} from 'react';
import useGTM from "../../../hooks/useGTM";

import Question from './question';
import TopToolbar from "../../toolbar";
import StepContext from "../../../context/stepsContext";
import './index.css';

const QuestionWrapper = (props) => {
    const {
        selectedElement,
        question,
        indexQuestion,
        handlePrevious,
        setNestedQuestion,
        setIndexCompletedQuestion,
        setIDLastCategory,
        setIdFirstSelectedAnswer
    } = props;

    const {next, jumpToStep, activeStep} = useContext(StepContext);

    const {dataGTM, actionsGTM} = useGTM();

    const getNextQuestion = id => {
        return question.children_data.find(item => item.id === id);
    };

    const goToNextQuestion = nextQuestion => {
        setNestedQuestion(nextQuestion);
        next();
    };

    const jumpToResultPage = nextQuestion => {
        setIDLastCategory(nextQuestion.id);
        setIndexCompletedQuestion(activeStep);
        jumpToStep(6);
    };

    const handleSelectAnswer = item => {
        const nextQuestion = getNextQuestion(item.id);

        if (indexQuestion === 1) {
            setIdFirstSelectedAnswer(item.id);
        }

        if (nextQuestion.children_data.length > 0) {
            goToNextQuestion(nextQuestion);
        } else {
            jumpToResultPage(nextQuestion);
        }

        actionsGTM.push({
            event: dataGTM.events.selectAnswer,
            category: selectedElement.name,
            question: question.name,
            answer: item.name
        });
    };

    return (
        <div className="main-wrapper fourth-step">
            <TopToolbar onClick={() => handlePrevious()}/>
            <div className="animation-area">
                <Question selectAnswer={handleSelectAnswer} question={question}/>
            </div>
        </div>
    )
};

export default QuestionWrapper;
