import React from "react";
import Img from "../../../imgComponent";
import defaultImg from "../../../../media/no-image.png";

let setImg = (item) => {
    return {
        alt: item.name,
        src: item.media_gallery.length === 0 ? defaultImg : item.media_gallery[0].url
    }
};

export const ProductImage = props => {
    return (
        <div className="product-image">
            <Img {...setImg(props.product)}/>
        </div>
    )
};