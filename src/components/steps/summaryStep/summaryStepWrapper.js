import React from 'react';
import FirstRowProduct from './firstRowProduct';
import TopToolbar from "../../toolbar/top-toolbar";
import ProductSlider from './productSlider';
import mapProduct from './productDescriptionResolver';
import ErrorView from "../../errorView";

import './index.css';

const SummaryStepWrapper = (props) => {
    const {summaryResult} = props;

    const productsLength = summaryResult.length;

    const oneProductClass = productsLength === 1 ? ' one-product' : '';

    const noAvailableProductsClass = productsLength === 0 ? ' no-products' : '';

    return (
        <div className={'summary-step' + noAvailableProductsClass}>
            <TopToolbar onClick={() => props.goTostep(props.indexCompletedQuestion)}/>
            {productsLength !== 0 ?
                <div className={'products-result' + oneProductClass}>
                    <FirstRowProduct
                        product={mapProduct(summaryResult[0])}
                        togglePop={props.togglePop}
                    />
                    {productsLength > 1
                        ? <ProductSlider
                            products={summaryResult}
                            togglePop={props.togglePop}
                        />
                        : null}
                </div>
                : <ErrorView notFoundProducts={true} cssClass='not-found-products'/>}
        </div>
    );
};

export default SummaryStepWrapper;