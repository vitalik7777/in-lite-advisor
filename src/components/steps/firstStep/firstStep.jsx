import React from 'react';


import CmsBlockContainer from '../../cmsBlock';
import Button from '../../button';
import LoadingSpinner from '../../loadingSpinner';

import './index.css';

const FirstStep = ({onNext, videoStep, block}) => {
    if (!block) return <LoadingSpinner/>;

    return (
        <div className="main-wrapper">
            <div className={"animation-area ready"}>
                <CmsBlockContainer cmsBlock={block}/>
                <Button
                    className="btn btn-next"
                    type="button"
                    onClick={() => onNext()}
                    text="get started">
                </Button>
                {
                    videoStep &&
                    <div className="skip-video-block">
                        <Button
                            className="btn skip-video"
                            type="button"
                            onClick={() => onNext(2)}
                            text="skip step with video">
                        </Button>
                    </div>
                }
            </div>
        </div>
    );
};

export default FirstStep;
