import React, {useContext, useEffect, useMemo, useState} from 'react';
import {connect} from 'react-redux';
import {useApolloClient} from '@apollo/react-hooks'
import SummaryStepWrapper from './summaryStepWrapper';
import SummaryPopUpContent from './summaryPopUp';
import PopUp from '../../popUp';
import {getProducts, clearProducts} from '../../../reducer/summaryReducer';
import LoadingSpinner from '../../loadingSpinner';

import StepContext from '../../../context/stepsContext';
import SummaryStepContext from '../../../context/summaryStepContext';
import useGTM from "../../../hooks/useGTM";

const SummaryStepContainer = (props) => {
    const [seen, setSeen] = useState(false);
    const [product, setProduct] = useState(null);
    const client = useApolloClient();
    const {jumpToStep, handlerCssClass} = useContext(StepContext);

    const {
        getProducts,
        clearProducts,
        summaryResult,
        idLastCategory,
        selectedElement,
        indexCompletedQuestion
    } = props;

    const {dataGTM, actionsGTM} = useGTM();
    const {events, label} = dataGTM;

    const handleTogglePop = (id) => {
        setSeen(!seen);

        if (id) {
            setProduct(summaryResult.find(item => item.id === id));
            handlerCssClass('open-popup ready');
            window.scrollTo(0, 0);
        } else {
            handlerCssClass('ready');
        }
    };

    const handleOpenProduct = (name) => {
        actionsGTM.push({
            event: events.chooseProduct,
            label: label.click + "Choose this lamp",
            category: selectedElement.name,
            product: name
        });
    };

    const goToStep = (index = null) => {
        clearProducts();
        handlerCssClass('');
        if(index) {
            jumpToStep(index);

            actionsGTM.push({
                event: events.goToStepGardenElement,
                label: label.click + 'go to step with garden elements'
            });
        } else {
            jumpToStep(indexCompletedQuestion);

            actionsGTM.push({
                event: events.previousStep,
                label: label.previous + 'summary-step'
            });
        }
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

    useEffect(() => {
        if (product) {
            actionsGTM.push({
                event: events.moreInformation,
                label: label.click + "More information",
                category: selectedElement.name,
                product: product.name
            });
        }
    }, [product]);

    const memoData = useMemo(() => {
        return {
            handleTogglePop,
            handleOpenProduct,
            selectedElement
        }
    }, [handleTogglePop, handleOpenProduct, selectedElement]);


    if (!summaryResult) return <LoadingSpinner/>;

    return (
        <SummaryStepContext.Provider value={memoData}>
            <SummaryStepWrapper
                summaryResult={summaryResult}
                goToStep={goToStep}
            />
            {
                seen ?
                    <PopUp onClick={() => memoData.handleTogglePop()}>
                        <SummaryPopUpContent productPopUp={product}/>
                    </PopUp>
                    :
                    null
            }
        </SummaryStepContext.Provider>
    )
};

let mapStateToProps = state => {
    return {
        summaryResult: state.summaryStep.summaryResult,
        selectedElement: state.questionsStep.selectedElement,
        idLastCategory: state.questionsStep.idLastCategory,
        indexCompletedQuestion: state.questionsStep.indexCompletedQuestion
    }
};

export default connect(mapStateToProps, {
    getProducts,
    clearProducts
})(SummaryStepContainer);
