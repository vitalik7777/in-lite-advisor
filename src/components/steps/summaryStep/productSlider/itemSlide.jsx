import React from 'react';
import {ProductImage} from "../productImage";
import RichText from "../../../richText";
import {ProductUsp} from "../productUsp";
import {BottomButtonBar} from "../bottomButtonBar";

export default function ItemSlide({product, togglePop}) {
    return (
        <div className="product">
            <ProductImage product={product}/>
            <div className="bottom-detail">
                <div className="product-name">{product.name}</div>
                <RichText classes="product-description" content={product.short_description}/>
                <ProductUsp product={product}/>
                <BottomButtonBar id={product.id} urlKey={product.url_key} togglePop={togglePop}/>
            </div>
        </div>
    )
}