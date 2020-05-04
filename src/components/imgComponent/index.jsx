import React from 'react';
import defaultImg from '../../media/no-image.png';

const Img = (props) => {
    const {alt, src, width, height} = props;

    let imageSrc = src ? src : defaultImg;

    return <img alt={alt} src={imageSrc} max-width={width} max-height={height}/>
};

export default Img;
