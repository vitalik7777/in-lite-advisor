import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useApolloClient} from '@apollo/react-hooks'
import GardenElementsWrapper from './gardenElementWrapper';
import {
    selectGardenElement,
    setGardenElements,
    getAllTree
} from '../../../reducer/gardenElementsReducer';
import useCmsBlock from "../../../hooks/useCmsBlocks";

const GardenElementsContainer = ({getAllTree, previous, next, gardenElements, selectGardenElement}) => {
    const {data, actions} = useCmsBlock();
    const client = useApolloClient();

    useEffect(() => {
        getAllTree(client);
    }, [getAllTree, client]);

    useEffect(() => {
        actions.getBlock('advisor_third_step_content');
    }, [actions]);

    return <GardenElementsWrapper block={data.block} previous={previous} next={next} gardenElements={gardenElements}
                                  selectGardenElement={selectGardenElement}/>

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