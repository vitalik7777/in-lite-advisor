import React from "react";

export const ProductUsp = props => {
    const {product} = props;

    return (
        <ul className="product-usp">
            <li>{product.pdp_usp_1}</li>
            <li>{product.pdp_usp_2}</li>
            <li>{product.pdp_usp_3}</li>
        </ul>
    )
};