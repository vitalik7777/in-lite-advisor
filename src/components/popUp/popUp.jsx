import React from 'react';
import './index.css';

const PopUp = (props) => {
    const {children, togglePop} = props;

    return (
        <>
            <div className="overlap-modal"/>
            <div className="modal">
                <div className="modal_content">
                    <span className="close-popup" onClick={() => togglePop(false)}/>
                    {children}
                </div>
            </div>
        </>
    );
};

export default PopUp;