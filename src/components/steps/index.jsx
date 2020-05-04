import React from 'react';
import FirstStepContainer from './firstStep';
import SecondStepContainer from './secondStep';
import GardenElementsContainer from './thirdStep';
import FirstQuestionsContainer from "./fourthStep/firstQuestion";
import SecondQuestionsContainer from "./fourthStep/secondQuestion";
import ThirdQuestionsContainer from "./fourthStep/thirdQuestion";
import SummaryStepContainer from "./summaryStep";

const Steps =
    [
        {name: 'FirstStep', component: <FirstStepContainer/>},
        {name: 'SecondStep', component: <SecondStepContainer/>},
        {name: 'ThirdStep', component: <GardenElementsContainer/>},
        {name: 'FirstQuestion', component: <FirstQuestionsContainer/>},
        {name: 'SecondQuestion', component: <SecondQuestionsContainer/>},
        {name: 'ThirdQuestion', component: <ThirdQuestionsContainer/>},
        {name: 'Step5', component: <SummaryStepContainer/>}
    ];

export default Steps;