import React, {useContext, useEffect} from 'react';
import SecondStep from './secondStep';
import useCmsBlock from "../../../hooks/useCmsBlocks";
import StepContext from "../../../context/stepsContext";
import useGTM from "../../../hooks/useGTM";

const SecondStepContainer = () => {
    const {data, actions} = useCmsBlock();
    const {next, previous} = useContext(StepContext);

    const {dataGTM, actionsGTM} = useGTM();
    const {events, label} = dataGTM;

    useEffect(() => {
        actions.getBlock('product_advisor_video');
    }, [actions]);

    const handleClick = () => {
        next();

        actionsGTM.push({
            event: events.nextStep,
            label: label.click + "go to the questions"
        });
    };

    return (
        <SecondStep block={data.block} previous={previous} next={handleClick}/>
    )
};

export default SecondStepContainer
