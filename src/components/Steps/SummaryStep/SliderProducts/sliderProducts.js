import React from 'react';
import RichText from '../../../RichText/richText';
import Button from '../../../Button/button';

import './slider-products.css';

const SliderProducts = (props) => {
    const {product, t} = props;
    return (
        <div className="product">
            <div className="product-image">
                <img width="325" src={product.media_gallery[0].url}/>
            </div>
            <div className="product-name">{product.name}</div>
            <RichText classes="product-description" content={product.short_description}/>

            <div className="bottom-btn-bar">
                <Button className="btn get-full-detail" onClick={() => {props.togglePop(product.id)}} type="button">{t('More information')}</Button>
                <Button className="btn get-product" type="button">{t('Choose this lapm')}</Button>
            </div>
        </div>
    );
};

export default SliderProducts;