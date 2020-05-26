import React from 'react';
import isObject from '../../../utils/isObject';
import RichText from "../../richText";
import ErrorView from "../../errorView";
import Img from '../../imgComponent'

const MAX_ANSWERS = process.env.REACT_APP_IN_LITE_MAX_ANSWERS;

const Question = ({selectAnswer, question}) => {
    const answers = question.children_data.filter(item => isObject(item));
    const slicedAnswers = answers.slice(0, MAX_ANSWERS);

    const setImg = (item) => {
        return {
            alt: item.name,
            src: item.image,
            width: '214px',
            height: '214px'
        }
    };

    return (
        <div className="question-block">
            <div className="head-title">{question.name}</div>
            <div className="answers-wrapper">
                {question.children_data.length === 0 ?
                    <ErrorView notFoundAnswers={true} cssClass='not-found-answers'/> :
                    slicedAnswers.map((item, id) => (
                        <div className="answer" onClick={() => {
                            selectAnswer(item)
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
