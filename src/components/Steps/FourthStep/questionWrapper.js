import React from 'react';
import Question from './question';

const QuestionWrapper = (props) => {

    let question = props.questions.find(item => item.selectedGardenElement === props.selectedElement);

    return (
        <div className="main-wrapper fourth-step">
            <div className="top-toolbar">
                <button className="btn-prev" onClick={() => props.previous()}></button>
            </div>
            <Question {...props} attributes={question.questions[props.index]}/>
        </div>
    )
}

export default QuestionWrapper;