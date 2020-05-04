import React from 'react';
import CmsBlockContainer from '../../cmsBlock';
import Button from '../../button';
import LoadingSpinner from '../../loadingSpinner';
import {useTranslation} from "react-i18next";

const FirstStep = (props) => {
    const {t} = useTranslation();

    const ready = !props.isFetching ? 'ready' : '';

    return (
        <div className="main-wrapper">
            {props.isFetching ? <LoadingSpinner /> : ''}

            <div className={"animation-area " + ready}>
                <CmsBlockContainer identifiers="advisor_first_step_content"/>
                <Button className="btn btn-next" type="button"
                        onClick={() => props.next()}>{t('get started')}</Button>
            </div>
        </div>
    );
};

export default FirstStep;