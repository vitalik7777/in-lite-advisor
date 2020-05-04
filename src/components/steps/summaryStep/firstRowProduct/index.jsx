import React from 'react';
import RichText from '../../../richText';
import {BottomButtonBar} from '../bottomButtonBar';
import {ProductImage} from '../productImage';
import './index.css';

const FirstRowProduct = ({product, togglePop}) => {
    return (
        <div className="first-row-result">
            <div className="preview-row">
                <div className="product-name">{product.name}</div>
                <div className="separator">&nbsp;</div>
                <RichText classes="product-description" content={product.short_description}/>
                <ProductImage product={product} width={200}/>
                <BottomButtonBar id={product.id} urlKey={product.url_key} togglePop={togglePop}/>
            </div>
        </div>
    );
};

export default FirstRowProduct;