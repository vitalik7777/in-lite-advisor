import React from 'react';
import FirstStepContainer from './FirstStep/firstStepContainer';
import SecondStepContainer from './SecondStep/secondStepContainer';
import {ThirdStep} from './ThirdStep/thirdStep';
import FirstQuestionsContainer from "./FourthStep/FirstQuestion/firstQuestionsContainer";
import SecondQuestionsContainer from "./FourthStep/SecondQuestion/secondQuestionsContainer";
import ThirdQuestionsContainer from "./FourthStep/ThirdQuestion/thirdQuestionsContainer";
import SummaryStep from "./SummaryStep/summaryStep";

const Steps =
    [
        {name: 'FirstStep', component: <FirstStepContainer/>},
        {name: 'SecondStep', component: <SecondStepContainer/>},
        {name: 'ThirdStep', component: <ThirdStep/>},
        {name: 'FirstQuestion', component: <FirstQuestionsContainer/>},
        {name: 'SecondQuestion', component: <SecondQuestionsContainer/>},
        {name: 'ThirdQuestion', component: <ThirdQuestionsContainer/>},
        {name: 'Step5', component: <SummaryStep/>}
    ];

export default Steps;