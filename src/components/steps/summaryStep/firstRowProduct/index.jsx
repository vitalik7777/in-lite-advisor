import React, {useContext} from 'react';
import RichText from '../../../richText';
import {BottomButtonBar} from '../bottomButtonBar';
import {ProductImage} from '../productImage';
import './index.css';
import SummaryStepContext from "../../../../context/summaryStepContext";

const FirstRowProduct = ({product}) => {
    const {selectedElement} = useContext(SummaryStepContext);
    const inspirationImage = selectedElement.image ? selectedElement.image : null;
    const style = {
        backgroundImage: `url(${inspirationImage})`,
        backgroundRepeat: 'no-repeat'
    };
    return (
        <div className="first-row-result" style={inspirationImage ? style : {}}>
            <div className="preview-row">
                <div className="product-name">{product.name}</div>
                <div className="separator"/>
                <RichText classes="product-description" content={product.short_description}/>
                <ProductImage product={product} width={200}/>
                <BottomButtonBar id={product.id} urlKey={product.url_key} name={product.name}/>
            </div>
        </div>
    );
};

export default FirstRowProduct;
