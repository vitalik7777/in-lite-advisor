import React from 'react';
import Button from "../button/button";

import './toolbar.css';


const TopToolbar = (props) => {
    const {...restProps} = props;

    return (
        <div className="top-toolbar">
            <Button className="btn-prev" {...restProps} text="prev"/>
        </div>
    );
};

export default TopToolbar;
