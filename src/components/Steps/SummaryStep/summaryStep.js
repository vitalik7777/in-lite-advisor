import React from 'react';
import {withApollo} from "react-apollo";
import summaryContainer from './summaryContainer';

export const SummaryStep = (props) => {
    const AppWithClient = withApollo(summaryContainer);


    return (
        <div className="summary-step">
            <AppWithClient {...props}/>
        </div>
    );
};

export default SummaryStep;