import React from 'react';
import Question from './question';
import TopToolbar from "../../toolbar";

import './index.css';

let getQuestionSelectedGardenElement = (props) => {
    return props.gardenElements.find(item => item.id === props.selectedGardenElement);
};

// if index = 1 get first level question based on selected garden element
// if index = 2 or 3 get second or third level question based on previous selected answer.
let getQuestion = props => {
    const question = props.index === 1 ? getQuestionSelectedGardenElement(props) : props.selectedNestedElement;
    return question.children_data[0];
};

// get second level of question if you come back from third step.
let previous = (props) => {
    if (props.index === 3) {
        const firstLevel = getQuestionSelectedGardenElement(props);
        const secondLevel = firstLevel.children_data[0].children_data.find(item => item.id === props.idFirstSelectedAnswer);
        props.setNestedQuestion(secondLevel);
    }
    return props.previous();
};


const QuestionWrapper = (props) => {
    return (
        <div className="main-wrapper fourth-step">
            <TopToolbar onClick={() => previous(props)}/>
            <div className="animation-area">
                <Question {...props} question={getQuestion(props)}/>
            </div>
        </div>
    )
};

export default QuestionWrapper;