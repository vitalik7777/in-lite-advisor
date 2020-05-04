import React from 'react';
import {connect} from 'react-redux';
import {withApollo} from "react-apollo";
import GardenElementsWrapper from './gardenElementWrapper';
import {
    selectGardenElement,
    setGardenElements,
    getAllTree
} from '../../../reducer/gardenElementsReducer';

class GardenElementsContainerWithNamespaces extends React.Component {
    componentDidMount() {
        this.props.getAllTree(this.props.client);
    }

    render() {
        return <GardenElementsWrapper {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        gardenElements: state.gardenElementsStep.gardenElements,
        isFetching: state.fetching.isFetching,
    }
};

const GardenElementsContainer = withApollo(GardenElementsContainerWithNamespaces);

export default connect(mapStateToProps, {
    selectGardenElement,
    setGardenElements,
    getAllTree
})(GardenElementsContainer);