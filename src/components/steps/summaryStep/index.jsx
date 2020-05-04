import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {withApollo} from "react-apollo";
import SummaryStepWrapper from './summaryStepWrapper';
import SummaryPopUpContent from './summaryPopUp';
import PopUp from '../../popUp';

import {getProducts, clearProducts} from '../../../reducer/summaryReducer';
import LoadingSpinner from "../../loadingSpinner";

const SummaryContainerWithNamespaces = (props) => {
    const [seen, setSeen] = useState(false);

    const {summaryResult} = props;

    const [productID, setProductID] = useState(null);

    const togglePop = (id, flag) => {
        setSeen(flag);

        if (flag) {
            setProductID(id);
            props.handlerCssClass('open-popup ready');
            window.scrollTo(0, 0);
        } else {
            props.handlerCssClass('ready');
        }
    };

    const goTostep = index => {
        props.clearProducts();
        props.handlerCssClass('');
        props.jumpToStep(index);
    };

    useEffect(() => {
        props.getProducts(props.client, props.idLastCategory);
    }, [props]);


    useEffect(() => {
        if (summaryResult) {
            if (summaryResult.length !== 0) {
                props.handlerCssClass('ready')
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
        idLastCategory: state.questionsStep.idLastCategory,
        summaryResult: state.summaryStep.summaryResult,
        indexCompletedQuestion: state.questionsStep.indexCompletedQuestion,
    }
};

const SummaryStepContainer = withApollo(SummaryContainerWithNamespaces);

export default connect(mapStateToProps, {getProducts, clearProducts})(SummaryStepContainer);