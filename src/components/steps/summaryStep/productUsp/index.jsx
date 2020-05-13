import React from "react";

export const ProductUsp = props => {
    const {product} = props;

    const productUsp = [
        product.pdp_usp_1,
        product.pdp_usp_2,
        product.pdp_usp_3
    ];

    return (

        <ul className="product-usp">
            {productUsp.map((item, id) => item && <li key={id}>{item}</li>)}
        </ul>
    )
};