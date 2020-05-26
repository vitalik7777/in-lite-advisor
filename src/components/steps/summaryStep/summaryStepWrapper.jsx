import React from 'react';
import FirstRowProduct from './firstRowProduct';
import TopToolbar from "../../toolbar";
import ProductSlider from './productSlider';
import mapProduct from './productDescriptionResolver';
import ErrorView from "../../errorView";

import './index.css';
import ButtonGoToStep from "./goToStep";

const SummaryStepWrapper = ({summaryResult, goToStep}) => {
    const productsLength = summaryResult.length;
    const oneProductClass = productsLength === 1 ? ' one-product' : '';
    const noAvailableProductsClass = productsLength === 0 ? ' no-products' : '';

    return (
        <div className={'summary-step' + noAvailableProductsClass}>
            <TopToolbar onClick={() => goToStep()}/>
            <ButtonGoToStep className='btn-prev' onClick={() => goToStep(2)}/>
            {productsLength !== 0 ?
                <div className={'products-result' + oneProductClass}>
                    <FirstRowProduct
                        product={mapProduct(summaryResult[0])}
                    />
                    {productsLength > 1
                        ? <ProductSlider
                            products={summaryResult}
                        />
                        : null}
                </div>
                : <ErrorView notFoundProducts={true} cssClass='not-found-products'/>}
        </div>
    );
};

export default SummaryStepWrapper;
