import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {useApolloClient} from '@apollo/react-hooks'
import SummaryStepWrapper from './summaryStepWrapper';
import SummaryPopUpContent from './summaryPopUp';
import PopUp from '../../popUp';

import {getProducts, clearProducts} from '../../../reducer/summaryReducer';
import LoadingSpinner from "../../loadingSpinner";

const SummaryStepContainer = (props) => {
    const [seen, setSeen] = useState(false);
    const {
        summaryResult,
        getProducts,
        idLastCategory,
        handlerCssClass
    } = props;
    const [productID, setProductID] = useState(null);
    const client = useApolloClient();

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
        idLastCategory: state.questionsStep.idLastCategory,
        summaryResult: state.summaryStep.summaryResult,
        indexCompletedQuestion: state.questionsStep.indexCompletedQuestion,
    }
};

export default connect(mapStateToProps, {getProducts, clearProducts})(SummaryStepContainer);