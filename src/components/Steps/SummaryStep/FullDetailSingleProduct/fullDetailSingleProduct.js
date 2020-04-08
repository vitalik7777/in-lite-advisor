import React from 'react';
import RichText from '../../../RichText/richText';
import Button from '../../../Button/button';
import getBaseUrl from '../../../../utils/getBaseUrl';

import './full-detail.css';

const FullDetailSingleProduct = (props) => {
    const {product, t} = props;

    return (
        <div className="preview-row">
            <div className="product-name">{product.name}</div>
            <RichText classes="product-description" content={product.short_description}/>
            <div className="product-image">
                    <img width="200" alt="" src={product.media_gallery[0].url}/>
            </div>
            <div className="bottom-btn-bar">
                <a target="_blank" href={getBaseUrl() + '/' + product.url_key} className="btn get-product">{t('Choose this lapm')}</a>
                <Button className="btn get-full-detail" onClick={() => {props.togglePop(product.id)}} type="button">{t('More information')}</Button>
            </div>
        </div>
    );
};

export default FullDetailSingleProduct;