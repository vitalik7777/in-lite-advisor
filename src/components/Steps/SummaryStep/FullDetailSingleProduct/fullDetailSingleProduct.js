import React from 'react';
import Slider from "react-slick";
import RichText from '../../../RichText/richText';
import Button from '../../../Button/button';

import './full-detail.css';

const FullDetailSingleProduct = (props) => {
    const {ulrSite, product, t} = props;
    const settings = {
        dots: true,
        infinite: false,
    };
    return (
        <div className="preview-row">
            <div className="product-name">{product.name}</div>
            <RichText classes="product-description" content={product.short_description}/>
            <div className="product-image">
                <a target="_blank" href={ulrSite + product.url_key}>
                    <img width="200" src={product.media_gallery[0].url}/></a>
            </div>
            <div className="bottom-btn-bar">
                <Button className="btn get-product" type="button">{t('Choose this lapm')}</Button>
                <Button className="btn get-full-detail" type="button">{t('More information')}</Button>
            </div>

            <Slider {...settings}>
                {product.media_gallery.map((item, id) => (
                    <div className="preview-row" key={id}>
                        <img width="200" src={item.url}/>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default FullDetailSingleProduct;