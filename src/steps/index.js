import React from 'react';
import FirstStepContainer from '../components/steps/firstStep';
import SecondStepContainer from '../components/steps/secondStep';
import GardenElementsContainer from '../components/steps/thirdStep';
import {
    FirstQuestionsContainer,
    SecondQuestionsContainer,
    ThirdQuestionsContainer
} from "../components/steps/fourthStep/index";
import SummaryStepContainer from "../components/steps/summaryStep";

const Steps =
    [
        {name: 'first-step', component: <FirstStepContainer/>},
        {name: 'second-step', component: <SecondStepContainer/>},
        {name: 'third-step', component: <GardenElementsContainer/>},
        {name: 'first-question', component: <FirstQuestionsContainer/>},
        {name: 'second-question', component: <SecondQuestionsContainer/>},
        {name: 'third-question', component: <ThirdQuestionsContainer/>},
        {name: 'summary-step', component: <SummaryStepContainer/>}
    ];

export default Steps;
