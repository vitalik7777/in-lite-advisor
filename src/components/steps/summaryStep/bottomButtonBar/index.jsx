import React from "react";
import {useTranslation} from 'react-i18next';

import getBaseUrl from "../../../../utils/getBaseUrl";
import Button from "../../../button";

import './index.css';

export const BottomButtonBar = props => {
    const {t} = useTranslation();

    const {id, urlKey, togglePop} = props;

    return (
        <div className="bottom-btn-bar">
            {typeof togglePop === 'function' ?
                <Button className="btn get-full-detail" onClick={() => {
                    togglePop(id, true)
                }} type="button">{t('More information')}</Button> : null}


            <a target="_blank" rel="noopener noreferrer" href={getBaseUrl() + '/' + urlKey}
               className="btn get-product">{t('Choose this lapm')}</a>
        </div>
    )
};