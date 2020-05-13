import React from 'react';
import LoadingSpinner from "../../loadingSpinner";
import TopToolbar from "../../toolbar";
import CmsBlockContainer from "../../cmsBlock";
import GardenElements from "./gardenElements";

import './index.css';

const GardenElementsWrapper = ({block, previous, next, gardenElements, selectGardenElement}) => {
    if (!block) return <LoadingSpinner/>;

    return (
        <div className="main-wrapper">
            <TopToolbar onClick={() => previous()}/>
            <div className="animation-area ready">
                <CmsBlockContainer cmsBlock={block}/>
                <GardenElements next={next} gardenElements={gardenElements} selectGardenElement={selectGardenElement}/>
            </div>
        </div>
    );
};

export default GardenElementsWrapper;