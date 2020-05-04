import React from 'react';
import './thirdStep.css';
import LoadingSpinner from "../../loadingSpinner";
import TopToolbar from "../../toolbar/top-toolbar";
import CmsBlockContainer from "../../cmsBlock";
import GardenElements from "./gardenElements";

const GardenElementsWrapper = (props) => {
    let ready = !props.isFetching ? 'ready' : '';

    return (
        <div className="main-wrapper">
            {props.isFetching ? <LoadingSpinner/> : ''}

            <TopToolbar onClick={() => props.previous()}/>
            <div className={"animation-area " + ready}>
                <CmsBlockContainer identifiers="advisor_third_step_content"/>
                <GardenElements {...props}/>
            </div>
        </div>
    );
};

export default GardenElementsWrapper;