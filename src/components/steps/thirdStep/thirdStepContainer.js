import React, {useContext, useEffect} from 'react';
import {connect} from 'react-redux';
import {useApolloClient} from '@apollo/react-hooks'
import GardenElementsWrapper from './gardenElementWrapper';
import {
    selectGardenElement,
    setGardenElements,
    getAllTree
} from '../../../reducer/gardenElementsReducer';
import useCmsBlock from "../../../hooks/useCmsBlocks";
import StepContext from "../../../context/stepsContext";
import useGTM from "../../../hooks/useGTM";

const GardenElementsContainer = ({getAllTree, gardenElements, selectGardenElement}) => {
    const {data, actions} = useCmsBlock();
    const client = useApolloClient();
    const {next, previous} = useContext(StepContext);
    const {dataGTM, actionsGTM} = useGTM();
    const {events, label} = dataGTM;

    useEffect(() => {
        getAllTree(client);
    }, [getAllTree, client]);

    useEffect(() => {
        actions.getBlock('advisor_third_step_content');
    }, [actions]);

    const handleSelectElement = (item) => {
        selectGardenElement(item.id);
        next();

        actionsGTM.push({
            event: events.selectGardenElement,
            label: label.selectElement + item.name
        });
    };


    return <GardenElementsWrapper block={data.block} previous={previous} gardenElements={gardenElements}
                                  selectGardenElement={handleSelectElement}/>
};

let mapStateToProps = (state) => {
    return {
        gardenElements: state.gardenElementsStep.gardenElements
    }
};

export default connect(mapStateToProps, {
    selectGardenElement,
    setGardenElements,
    getAllTree
})(GardenElementsContainer);
