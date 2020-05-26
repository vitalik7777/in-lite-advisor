import React from 'react';
import Slider from "react-slick";
import RichText from '../../../richText';
import {ProductImage} from "../productImage";

import {ProductUsp} from "../productUsp";
import {BottomButtonBar} from "../bottomButtonBar";

import './index.css';

const mapProduct = product => {
    const {description} = product;

    return {
        ...product,
        description:
            typeof description === 'object' ? description.html : description
    };
};

const SummaryPopUpContent = ({productPopUp}) => {
    const settings = {
        dots: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const product = mapProduct(productPopUp);

    const {amount} = product.price.regularPrice;

    const productPrice = amount.value.toFixed(2);


    return (
        <div className="product-popup">
            <ProductImage product={product} width={325}/>
            <div className="bottom-detail">
                <div className="product-name">{product.name}</div>
                <div className="price">{productPrice}</div>
                <RichText classes="product-description" content={product.description}/>
                <ProductUsp product={product}/>
                <div className="bottom-wrap">
                    <Slider {...settings}>
                        {product.media_gallery.map((item, id) => (
                            <div className="preview-row" key={id}>
                                <img alt="" width="200" src={item.url}/>
                            </div>
                        ))}
                    </Slider>
                    <BottomButtonBar urlKey={product.url_key} name={product.name}/>
                </div>
            </div>
        </div>
    );
};

export default SummaryPopUpContent;
