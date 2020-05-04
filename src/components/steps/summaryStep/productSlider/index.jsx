import React from 'react';
import {useTranslation} from 'react-i18next';
import Slider from "react-slick/lib";
import ItemSlide from "./itemSlide";
import mapProduct from '../productDescriptionResolver';

import './index.css';

const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 2,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};

export default function ProductSlider({products, togglePop}) {
    const {t} = useTranslation();

    return (
        <div className="slider-row-result">
            <div className="slider-wrapper">
                <div className="heading">{t('prefer something else?')}</div>
                <Slider {...settings}>
                    {products.map((item, id) => {
                        return id !== 0 ?
                            <ItemSlide key={id} product={mapProduct(item)} togglePop={togglePop}/> : ''
                    })}
                </Slider>
            </div>
        </div>
    )
}