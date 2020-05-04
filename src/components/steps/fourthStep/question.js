import React from 'react';
import isObject from '../../../utils/isObject';
import RichText from "../../richText";
import ErrorView from "../../errorView";
import Img from '../../imgComponent'

const MAX_ANSWERS = process.env.REACT_APP_IN_LITE_MAX_ANSWERS;

const getQuestion = (props, id) => {
    return props.question.children_data.find(item => item.id === id);
};

const goToNextQuestion = (props, nextQuestion) => {
    props.setNestedQuestion(nextQuestion);
    props.next();
};

const jumpToResultPage = (props, nextQuestion) => {
    props.setIDLastCategory(nextQuestion.id);
    props.setIndexCompletedQuestion(props.activeStep);
    props.jumpToStep(6);
};

const setImg = (item) => {
    return {
        alt: item.name,
        src: item.image,
        width: '214px',
        height: '214px'
    }
};

const Question = (props) => {
    let setNestedQuestion = (id) => {
        const nextQuestion = getQuestion(props, id);

        // set id of First Selected answer
        if (props.index === 1) {
            props.setIdFirstSelectedAnswer(id);
        }

        if (nextQuestion.children_data.length > 0) {
            goToNextQuestion(props, nextQuestion);
        } else {
            jumpToResultPage(props, nextQuestion);
        }
    };


    const answers = props.question.children_data.filter(item => isObject(item));

    // get only 3 answers
    const slicedAnswers = answers.slice(0, MAX_ANSWERS);

    return (
        <div className="question-block">
            <div className="head-title">{props.question.name}</div>
            <div className="answers-wrapper">
                {props.question.children_data.length === 0 ?
                    <ErrorView notFoundAnswers={true} cssClass='not-found-answers'/> :
                    slicedAnswers.map((item, id) => (
                        <div className="answer" onClick={() => {
                            setNestedQuestion(item.id)
                        }} key={id}>
                            <div className="answer-icon">
                                <Img {...setImg(item)}/>
                            </div>
                            <div className="answer-name">{item.name}</div>
                            <RichText classes="answer-description" content={item.description}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default Question;