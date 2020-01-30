import React from 'react';
import FirstStep from './FirstStep/firstStep';
import {SecondStep} from './SecondStep/secondStep';
import {ThirdStep} from './ThirdStep/thirdStep';
import FirstQuestionsContainer from "./FourthStep/FirstQuestion/firstQuestionsContainer";
import SecondQuestionsContainer from "./FourthStep/SecondQuestion/secondQuestionsContainer";
import ThirdQuestionsContainer from "./FourthStep/ThirdQuestion/thirdQuestionsContainer";
import SummaryContainer from "./SummaryStep/summaryContainer";

const Steps =
    [
        {name: 'FirstStep', component: <FirstStep/>},
        {name: 'SecondStep', component: <SecondStep/>},
        {name: 'ThirdStep', component: <ThirdStep/>},
        {name: 'firstQuestion', component: <FirstQuestionsContainer/>},
        {name: 'secondQuestion', component: <SecondQuestionsContainer/>},
        {name: 'thirdQuestion', component: <ThirdQuestionsContainer/>},
        {name: 'Step5', component: <SummaryContainer/>}
    ];

export default Steps;