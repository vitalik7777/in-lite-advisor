import React from 'react';
import {useTranslation} from 'react-i18next';


const LoadingSpinner = () => {
    const {t} = useTranslation();

    return (
        <div className="spinner">
            <div className="double-bounce1"/>
            <div className="double-bounce2"/>
            <div className="spinner-text">{t('Loading...')}</div>
        </div>
    )
};

export default LoadingSpinner;
