import React, {useContext, useEffect} from 'react';
import FirstStep from './firstStep';
import useCmsBlock from "../../../hooks/useCmsBlocks";
import StepContext from "../../../context/stepsContext";

const FirstStepContainer = () => {
    const videoStep = localStorage.getItem('setupVideoStep');
    const {data, actions} = useCmsBlock();
    const {next, jumpToStep} = useContext(StepContext);

    useEffect(() => {
        actions.getBlock('advisor_first_step_content');
    }, [actions]);

    const handleStep = (step) => {
        if (!step) {
            localStorage.setItem('setupVideoStep', 'video-viewed');
            next();
        } else {
            jumpToStep(step);
        }
    };

    return (
        <FirstStep
            onNext={handleStep}
            videoStep={videoStep}
            block={data.block}
        />
    )
};

export default FirstStepContainer;