import React from 'react';
import {connect} from 'react-redux';
import QuestionWrapper from '../questionWrapper';

import {setNestedQuestion, setIDLastCategory, setIndexCompletedQuestion} from '../../../../reducer/questionReducer';

const SecondQuestionsContainer = (props) => {
    let index = 2;

    return (
        <QuestionWrapper index={index} {...props}/>
    )
};

let mapStateToProps = (state) => {
    return {
        selectedNestedElement: state.questionsStep.selectedNestedElement
    }
};

export default connect(mapStateToProps, {setNestedQuestion, setIDLastCategory, setIndexCompletedQuestion})(SecondQuestionsContainer);
