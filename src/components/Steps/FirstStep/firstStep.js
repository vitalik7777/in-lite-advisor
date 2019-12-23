import React from 'react';
import CmsBlockGroup from '../../CmsBlock/cmsBlock';
import Button from '../../Button/button';

export const FirstStep = (props) => {
    return (
        <div className="main-wrapper">
            <CmsBlockGroup identifiers="advisor_first_step_content"/>
            <Button className="btn btn-next" type="button" onClick={() => props.next()}>aan de slag</Button>
        </div>
    );
};