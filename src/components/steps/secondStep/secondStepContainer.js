import React, {useContext, useEffect} from 'react';
import SecondStep from './secondStep';
import useCmsBlock from "../../../hooks/useCmsBlocks";
import StepContext from "../../../context/stepsContext";

const SecondStepContainer = () => {
    const {data, actions} = useCmsBlock();
    const {next, previous} = useContext(StepContext);

    useEffect(() => {
        actions.getBlock('product_advisor_video');
    }, [actions]);

    return (
        <SecondStep block={data.block} previous={previous} next={next}/>
    )
};

export default SecondStepContainer