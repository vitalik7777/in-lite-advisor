import React, {useContext, useEffect} from 'react';

import FirstStep from './firstStep';
import useCmsBlock from "../../../hooks/useCmsBlocks";
import useGTM from '../../../hooks/useGTM';
import StepContext from "../../../context/stepsContext";

const FirstStepContainer = () => {
    const videoStep = localStorage.getItem('setupVideoStep');
    const {data, actions} = useCmsBlock();
    const {next, jumpToStep} = useContext(StepContext);

    const {dataGTM, actionsGTM} = useGTM();
    const {events, label} = dataGTM;

    useEffect(() => {
        actions.getBlock('advisor_first_step_content');
    }, [actions]);

    const handleClick = (step) => {
        if (!step) {
            localStorage.setItem('setupVideoStep', 'video-viewed');
            next();

            actionsGTM.push({
                event: events.nextStep,
                label: label.click + "get started"
            });
        } else {
            jumpToStep(step);

            actionsGTM.push({
                event: events.nextStep,
                label: label.click + "skip step with video"
            });
        }
    };

    return (
        <FirstStep
            onNext={handleClick}
            videoStep={videoStep}
            block={data.block}
        />
    )
};

export default FirstStepContainer;
