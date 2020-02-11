import React from 'react';
import CmsBlockContainer from '../../CmsBlock/cmsBlockContainer';
import Button from '../../Button/button';
import LoadingSpinner from '../../LoadingSpinner/loadingSpinner';

const FirstStep = (props) => {
    let ready = !props.isFetching ? 'ready' : '';
    return (
        <div className="main-wrapper">
            {props.isFetching ? <LoadingSpinner text={props.t('Loading...')}/> : ''}

            <div className={"animation-area " + ready}>
                <CmsBlockContainer identifiers="advisor_first_step_content"/>
                <Button className="btn btn-next" type="button"
                        onClick={() => props.next()}>{props.t('vetal')}</Button>
            </div>
        </div>
    );
};

export default FirstStep;