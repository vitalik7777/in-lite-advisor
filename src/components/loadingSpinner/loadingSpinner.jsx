import React, {useContext} from 'react';
import TranslationContext from "../../context/translateContext";

import './index.css';


const LoadingSpinner = () => {
    const {t} = useContext(TranslationContext);

    return (
        <div className="spinner">
            <div className="double-bounce1"/>
            <div className="double-bounce2"/>
            <div className="spinner-text">{t('Loading...')}</div>
        </div>
    )
};

export default LoadingSpinner;
