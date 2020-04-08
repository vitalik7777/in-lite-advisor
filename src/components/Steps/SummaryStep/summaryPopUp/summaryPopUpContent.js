import React from 'react';
import Slider from "react-slick";
import RichText from '../../../RichText/richText';
import getBaseUrl from '../../../../utils/getBaseUrl';

import './summaryPopUocontent.css';

const mapProduct = product => {
    const {description} = product;

    return {
        ...product,
        description:
            typeof description === 'object' ? description.html : description
    };
};

const SummaryPopUpContent = (props) => {
    const {products, productId, t} = props;

    const settings = {
        dots: true,
        infinite: false,
    };

    let product = mapProduct(products.find(item => item.id === productId));

    const { amount: productPrice } = product.price.regularPrice;

    return (
        <div className="product-popup">
            <div className="product-image">
                <img width="325" alt="" src={product.media_gallery[0].url}/>
            </div>
            <div className="bottom-detail">
                <div className="product-name">{product.name}</div>
                <div className="price">{productPrice.value}</div>
                <RichText classes="product-description" content={product.description}/>
                <ul className="product-usp">
                    <li>{product.pdp_usp_1}</li>
                    <li>{product.pdp_usp_2}</li>
                    <li>{product.pdp_usp_3}</li>
                </ul>
                <Slider {...settings}>
                    {product.media_gallery.map((item, id) => (
                        <div className="preview-row" key={id}>
                            <img alt="" width="200" src={item.url}/>
                        </div>
                    ))}
                </Slider>
                <div className="bottom-btn-bar">
                    <a target="_blank" href={getBaseUrl() + '/' + product.url_key} className="btn get-product">{t('Choose this lapm')}</a>
                </div>
            </div>
        </div>
    );
};

export default SummaryPopUpContent;