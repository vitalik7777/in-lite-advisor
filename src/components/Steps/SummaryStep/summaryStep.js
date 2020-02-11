import React from 'react';
import {withApollo} from "react-apollo";
import summaryContainer from './summaryContainer';

export const SummaryStep = (props) => {
    const AppWithClient = withApollo(summaryContainer);
    return (
        <div className="summary-step">
            <div className="top-toolbar">
                <button className="btn-prev" onClick={() => props.previous()}>prev</button>
            </div>
            <AppWithClient {...props}/>
        </div>
    );
};

export default SummaryStep;