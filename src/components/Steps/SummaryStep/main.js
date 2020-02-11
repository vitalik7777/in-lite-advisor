import React from 'react';
import FullDetailSingleProduct from './FullDetailSingleProduct/fullDetailSingleProduct';
import SliderProducts from './SliderProducts/sliderProducts';
import Slider from "react-slick";


import './slick.min.css';
import './slick-theme.min.css';
import './summary-result.css';

const ulrSite = "https://inlitedev.hypernode.io/";


const mapProduct = product => {
    const {short_description} = product;

    return {
        ...product,
        short_description:
            typeof short_description === 'object' ? short_description.html : short_description
    };
};

const Step5 = (props) => {
    const {summaryResult} = props;

    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 2,
    };

    return (
        <div className="products-result">
            <div className="first-row-result">
                <FullDetailSingleProduct
                    product={mapProduct(summaryResult[0])}
                    ulrSite={ulrSite}
                    t={props.t}
                />
            </div>
            <div className="slider-row-result">
                <Slider {...settings}>
                    {summaryResult.map((item, id) => (
                        <SliderProducts key={id} product={mapProduct(item)} {...props}/>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Step5;