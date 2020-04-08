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
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (<>
            {summaryResult.length > 0 ?
                <div className="products-result">
                    <div className="first-row-result">
                        <FullDetailSingleProduct
                            product={mapProduct(summaryResult[0])}
                            ulrSite={ulrSite}
                            t={props.t}
                            togglePop={props.togglePop}
                        />
                    </div>
                    <div className="slider-row-result">
                        <div className="slider-wrapper">
                            <div className="heading">{props.t('prefer something else?')}</div>
                            <Slider {...settings}>
                                {summaryResult.map((item, id) => {
                                    if (id !== 0) {
                                        return (
                                            <SliderProducts key={id} product={mapProduct(item)} {...props}/>
                                        )
                                    }
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
                : null}
        </>
    );
};

export default Step5;