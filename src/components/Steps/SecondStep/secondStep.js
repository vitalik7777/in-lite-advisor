import React from 'react';
import Button from '../../Button/button';
import CmsBlockContainer from '../../CmsBlock/cmsBlockContainer';
import LoadingSpinner from "../../LoadingSpinner/loadingSpinner";
import TopToolbar from "../../toolbar/top-toolbar";

const SecondStep = (props) => {
    let ready = !props.isFetching ? 'ready' : '';

    return (
        <div className="main-wrapper">
            {props.isFetching ? <LoadingSpinner text={props.t('Loading...')}/> : ''}

            <TopToolbar onClick={() => props.previous()}/>
            <div className={"animation-area " + ready}>
                <div className="head-title">Hoe in-lite werkt</div>
                <div className="video-content">
                    <CmsBlockContainer identifiers="product_advisor_video"/>
                </div>
                <Button className="btn btn-next" type="button" onClick={() => props.next()}>naar de vragen</Button>
            </div>
        </div>
    );
};

export default SecondStep;