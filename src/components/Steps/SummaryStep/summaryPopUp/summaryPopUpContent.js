import React from 'react';
import Slider from "react-slick";


const SummaryPopUpContent = (props) => {
    const {products, productId} = props;

    const settings = {
        dots: true,
        infinite: false,
    };

    let product = products.find(item => item.id === productId);

    return (
        <div className="product-popup">
            <div className="product-image">
                <img width="325" src={product.media_gallery[0].url}/>
            </div>
            <div className="product-name">{product.name}</div>

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

export default SummaryPopUpContent;