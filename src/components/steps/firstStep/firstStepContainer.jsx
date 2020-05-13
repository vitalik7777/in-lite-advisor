import React, {useEffect} from 'react';
import FirstStep from './firstStep';
import useCmsBlock from "../../../hooks/useCmsBlocks";

const FirstStepContainer = ({next, jumpToStep}) => {
    const videoStep = localStorage.getItem('setupVideoStep');
    const {data, actions} = useCmsBlock();


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