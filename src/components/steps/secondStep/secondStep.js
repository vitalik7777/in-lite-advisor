import React from 'react';
import Button from '../../button';
import CmsBlockContainer from '../../cmsBlock';
import LoadingSpinner from "../../loadingSpinner";
import TopToolbar from "../../toolbar/top-toolbar";

const SecondStep = (props) => {
    const ready = !props.isFetching ? 'ready' : '';

    return (
        <div className="main-wrapper">
            {props.isFetching ? <LoadingSpinner /> : ''}

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