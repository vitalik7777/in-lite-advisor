import React from 'react';
import RichText from '../../../richText';
import {BottomButtonBar} from '../bottomButtonBar';
import {ProductImage} from '../productImage';
import defaultInspirationImage from "../../../../media/summary-bg.jpg";
import './index.css';

const FirstRowProduct = ({product, togglePop, selectedElement}) => {
    const inspirationImage = selectedElement.image ? selectedElement.image : defaultInspirationImage;
    const style = {
        backgroundImage: `url(${inspirationImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };
    return (
        <div className="first-row-result" style={style}>
            <div className="preview-row">
                <div className="product-name">{product.name}</div>
                <div className="separator"/>
                <RichText classes="product-description" content={product.short_description}/>
                <ProductImage product={product} width={200}/>
                <BottomButtonBar id={product.id} urlKey={product.url_key} togglePop={togglePop}/>
            </div>
        </div>
    );
};

export default FirstRowProduct;
