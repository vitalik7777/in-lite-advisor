import React, {useEffect} from 'react';
import SecondStep from './secondStep';
import useCmsBlock from "../../../hooks/useCmsBlocks";

const SecondStepContainer = ({previous, next}) => {
    const {data, actions} = useCmsBlock();

    useEffect(() => {
        actions.getBlock('product_advisor_video');
    }, [actions]);

    return (
        <SecondStep block={data.block} previous={previous} next={next}/>
    )
};

export default SecondStepContainer