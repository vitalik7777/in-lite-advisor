import React from 'react';
import './popUp.css';

const PopUp = (props) => {
    const {t, children, togglePop} = props;

    return (
        <div className="modal">
            <div className="modal_content">
                <button className="close" onClick={() => {togglePop()}}>{t('close')}</button>
                {children}
            </div>
        </div>
    );
};

export default PopUp;