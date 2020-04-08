import React from "react";
import {connect} from 'react-redux';

export const stepsResolver = (Component) => {
    class stepsResolverComponent extends React.Component {
        render() {
            return <Component {...this.props}/>
        }
    }

    let mapStateToProps = (state) => {
        return {
            gardenElements: state.gardenElementsStep.gardenElements
        }
    };

    return connect(mapStateToProps)(stepsResolverComponent);
};