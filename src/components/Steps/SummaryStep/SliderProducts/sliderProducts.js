import React from 'react';
import RichText from '../../../RichText/richText';
import Button from '../../../Button/button';
import getBaseUrl from '../../../..//utils/getBaseUrl';

import './slider-products.css';

const SliderProducts = (props) => {
    const {product, t} = props;
    return (
        <div className="product">
            <div className="product-image">
                <img width="325" src={product.media_gallery[0].url}/>
            </div>
            <div className="bottom-detail">
                <div className="product-name">{product.name}</div>
                <RichText classes="product-description" content={product.short_description}/>
                <ul className="product-usp">
                    <li>{product.pdp_usp_1}</li>
                    <li>{product.pdp_usp_2}</li>
                    <li>{product.pdp_usp_3}</li>
                </ul>
                <div className="bottom-btn-bar">
                    <Button className="btn get-full-detail" onClick={() => {props.togglePop(product.id)}} type="button">{t('More information')}</Button>
                    <a target="_blank" href={getBaseUrl() + '/' + product.url_key} className="btn get-product">{t('Choose this lapm')}</a>
                </div>
            </div>
        </div>
    );
};

export default SliderProducts;