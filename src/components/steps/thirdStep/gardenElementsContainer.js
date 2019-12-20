import React from 'react';
import {GardenElements} from './gardenElements';
import {connect} from 'react-redux';

import {selectGardenElementAC} from '../../../reducer/gardenEelementsReducer';

const GardenElementsContainer = (props) => {
    return (
        <Connected {...props}/>
    )
};

let mapStateToProps = (state) => {
    return {
        gardenElements: state.gardenElementsStep.gardenElements
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        selectElement: (key) => {
            dispatch(selectGardenElementAC(key));
        },
    }
};

const Connected = connect(mapStateToProps, mapDispatchToProps)(GardenElements);

export default GardenElementsContainer;