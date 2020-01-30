import React from 'react';
import CmsBlockGroup from '../../CmsBlock/cmsBlock';
import Button from '../../Button/button';
import {withNamespaces} from 'react-i18next';

const FirstStep = (props) => {
    return (
        <div className="main-wrapper">
            <CmsBlockGroup identifiers="advisor_first_step_content"/>
            <Button className="btn btn-next" type="button" onClick={() => props.next()}>{props.t('vetal')}</Button>
        </div>
    );
};

export default withNamespaces()(FirstStep);