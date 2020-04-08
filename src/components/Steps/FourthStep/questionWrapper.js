import React from 'react';
import Question from './question';

import './question.css';
import TopToolbar from "../../toolbar/top-toolbar";

const QuestionWrapper = (props) => {
    let question;

    if (props.index === 1) {
        question = props.gardenElements.find(item => item.id === props.selectedElement);
    } else {
        question = props.selectedValue;
    }

    let previous = () => {
        if (props.index === 3) {
            let s = props.gardenElements.find(item => item.id === props.selectedElement);
            let s2 = s.children_data[0].children_data.find(item => item.id === props.idFirstSelectedCategory);
            props.setValue(s2);
        }

        props.previous();
    };


    return (
        <div className="main-wrapper fourth-step">
            <TopToolbar onClick={() => previous()}/>
            <div className="animation-area">
                <Question {...props} question={question.children_data[0]}/>
            </div>
        </div>
    )
};

export default QuestionWrapper;