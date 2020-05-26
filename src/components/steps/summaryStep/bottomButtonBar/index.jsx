import React, {useContext} from "react";


import getBaseUrl from "../../../../utils/getBaseUrl";
import Button from "../../../button";

import './index.css';
import TranslationContext from "../../../../context/translateContext";
import SummaryStepContext from "../../../../context/summaryStepContext";

export const BottomButtonBar = ({id = null, urlKey, name}) => {
    const {t} = useContext(TranslationContext);
    const {handleTogglePop, handleOpenProduct} = useContext(SummaryStepContext);

    const ButtonPopUp = () => {
        if (id) {
            return <Button className="btn get-full-detail"
                           onClick={() => {
                               handleTogglePop(id)
                           }}
                           type="button"
                           text="More information"
            />
        } else {
            return null;
        }
    };

    return (
        <div className="bottom-btn-bar">
            <ButtonPopUp/>
            <a target="_blank"
               href={getBaseUrl() + '/' + urlKey}
               className="btn get-product"
               onClick={() => {
                   handleOpenProduct(name)
               }}
            >
                {t('Choose this lamp')}
            </a>
        </div>
    )
};
