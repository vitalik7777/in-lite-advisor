import React from 'react';
import QuestionsContainer from './questionsContainer';
import {withApollo} from "react-apollo";

export const FourthStep = (props) => {
    const AppWithClient = withApollo(QuestionsContainer);

    return (
        <div className="main-wrapper fourth-step">
            <div className="top-toolbar">
                <button className="btn-prev" onClick={() => props.previous()}></button>
            </div>
            <AppWithClient/>
            <div className="toolbar">
                <button className="btn btn-next" onClick={() => props.next()}>naar de vragen</button>
            </div>
        </div>
    );
}