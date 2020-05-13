import React, {useContext} from "react";


import getBaseUrl from "../../../../utils/getBaseUrl";
import Button from "../../../button";

import './index.css';
import TranslationContext from "../../../../context/translateContext";

export const BottomButtonBar = props => {
    const {t} = useContext(TranslationContext);
    const {id, urlKey, togglePop} = props;

    return (
        <div className="bottom-btn-bar">
            {typeof togglePop === 'function' ?
                <Button className="btn get-full-detail" onClick={() => {
                    togglePop(id, true)
                }} type="button" text="More information"/> : null}


            <a target="_blank" rel="noopener noreferrer" href={getBaseUrl() + '/' + urlKey}
               className="btn get-product">{t('Choose this lamp')}</a>
        </div>
    )
};