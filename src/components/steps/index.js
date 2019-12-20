import React from 'react';

import {FirstStep} from './firstStep/firstStep';
import {SecondStep} from './secondStep/secondStep';
import {ThirdStep} from './thirdStep/thirdStep';
import {FourthStep} from "./fourthStep/fourthStep";
import Step5 from "./summaryStep/main";

const Steps =
    [
        {name: 'FirstStep', component: <FirstStep />},
        {name: 'SecondStep', component: <SecondStep />},
        {name: 'ThirdStep', component: <ThirdStep />},
        {name: 'FourthStep', component: <FourthStep />},
        {name: 'Step5', component: <Step5 />}
    ];

export default Steps;