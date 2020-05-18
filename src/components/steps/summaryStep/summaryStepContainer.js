import React, {useContext, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {useApolloClient} from '@apollo/react-hooks'
import SummaryStepWrapper from './summaryStepWrapper';
import SummaryPopUpContent from './summaryPopUp';
import PopUp from '../../popUp';

import {getProducts, clearProducts} from '../../../reducer/summaryReducer';
import LoadingSpinner from "../../loadingSpinner";
import StepContext from "../../../context/stepsContext";

const SummaryStepContainer = (props) => {
    const [seen, setSeen] = useState(false);
    const {
        summaryResult,
        getProducts,
        idLastCategory
    } = props;
    const [productID, setProductID] = useState(null);
    const client = useApolloClient();
    const {jumpToStep, handlerCssClass} = useContext(StepContext);

    const togglePop = (id, flag) => {
        setSeen(flag);

        if (flag) {
            setProductID(id);
            handlerCssClass('open-popup ready');
            window.scrollTo(0, 0);
        } else {
            handlerCssClass('ready');
        }
    };


    const goTostep = index => {
        props.clearProducts();
        handlerCssClass('');
        jumpToStep(index);
    };

    useEffect(() => {
        getProducts(client, idLastCategory);
    }, [getProducts, client, idLastCategory]);


    useEffect(() => {
        if (summaryResult) {
            if (summaryResult.length !== 0) {
                handlerCssClass('ready')
            }
        }
    }, [summaryResult]);


    if (!summaryResult) return <LoadingSpinner/>;

    return (<>
            <SummaryStepWrapper {...props} goTostep={goTostep} togglePop={togglePop}/>
            {seen ?
                <PopUp
                    t={props.t}
                    togglePop={togglePop}>
                    <SummaryPopUpContent
                        products={summaryResult}
                        t={props.t}
                        productId={productID}/>
                </PopUp>
                : null}
        </>
    )
};

let mapStateToProps = (state) => {
    return {
        gardenElements: state.gardenElementsStep.gardenElements,
        idLastCategory: state.questionsStep.idLastCategory,
        selectedGardenElement: state.gardenElementsStep.selectedGardenElement,
        summaryResult: state.summaryStep.summaryResult,
        indexCompletedQuestion: state.questionsStep.indexCompletedQuestion,
    }
};

export default connect(mapStateToProps, {getProducts, clearProducts})(SummaryStepContainer);
