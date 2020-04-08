import React from 'react';

const Question = (props) => {
    let setValue = (value) => {
        let nextQuestion = props.question.children_data.find(item => item.id === value);

        if (props.index === 1) {
            props.setIdFirstSelectedQuestion(value);
        }

        if (nextQuestion.children_data.length > 0) {
            props.setValue(nextQuestion);
            props.next();
        } else {
            props.setIDLastCategory(nextQuestion.id);
            props.setIndexCompletedQuestion(props.activeStep);
            props.jumpToStep(6);
        }
    };

    return (
        <div className="question-block">
            <div className="question-title">{props.question.name}</div>
            <div className="answers-wrapper">
                {props.question.children_data.map((item, id) => (
                    <div className="answer" onClick={() => {
                        setValue(item.id)
                    }} key={id}>
                        <div className="answer-icon">
                            <img alt={item.name} src={item.image}/>
                        </div>
                        <div className="answer-name">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Question;