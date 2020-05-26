import React from 'react';
import './index.css';

const PopUp = (props) => {
    const {children, ...restProps} = props;

    return (
        <>
            <div className="overlap-modal"/>
            <div className="modal">
                <div className="modal_content">
                    <span className="close-popup" {...restProps}/>
                    {children}
                </div>
            </div>
        </>
    );
};

export default PopUp;
