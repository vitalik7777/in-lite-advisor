import React from 'react';

import Button from '../../button';
import CmsBlockContainer from '../../cmsBlock';
import LoadingSpinner from "../../loadingSpinner";
import TopToolbar from "../../toolbar";

import './index.css';

const SecondStep = ({block, previous, next}) => {
    if (!block) return <LoadingSpinner/>;

    return (
        <div className="main-wrapper">
            <TopToolbar onClick={() => previous()}/>
            <div className={"animation-area ready"}>
                <CmsBlockContainer cmsBlock={block}/>
                <Button className="btn btn-next" type="button" onClick={() => next()} text="go to the questions"/>
            </div>
        </div>
    );
};

export default SecondStep;
