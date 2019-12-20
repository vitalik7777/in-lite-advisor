import React from 'react';
import CmsBlockGroup from '../../CmsBlock/cmsBlock';

export const FirstStep = (props) => {
    return (
        <div className="main-wrapper">
            <CmsBlockGroup identifiers="advisor_first_step_content"/>
            <div className="toolbar">
                <button className="btn btn-next" onClick={() => props.next()}>aan de slag</button>
            </div>
        </div>
    );
};