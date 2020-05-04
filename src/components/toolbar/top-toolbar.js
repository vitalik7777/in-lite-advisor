import React from 'react';
import {useTranslation} from 'react-i18next';

import './toolbar.css';

const TopToolbar = (props) => {
    const {t} = useTranslation();
    const {...restProps} = props;

    return (
        <div className="top-toolbar">
            <button className="btn-prev" {...restProps}>{t('prev')}</button>
        </div>
    );
};

export default TopToolbar;
