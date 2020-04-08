import React, {Suspense} from 'react';
import {connect} from 'react-redux';
import {withNamespaces} from 'react-i18next';
import {withApollo} from "react-apollo";
import GardenElementsWrapper from './gardenElementWrapper';
import {
    selectGardenElement,
    setGardenElements,
    getAllTree
} from '../../../reducer/gardenEelementsReducer';

const GardenElements = React.lazy(() => import('./gardenElements'));


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
const AppWithClient = withApollo(GardenElementsContainerWithNamespaces);

const GardenElementsContainer = withNamespaces()(AppWithClient);

export default connect(mapStateToProps, {
    selectGardenElement,
    setGardenElements,
    getAllTree
})(GardenElementsContainer);