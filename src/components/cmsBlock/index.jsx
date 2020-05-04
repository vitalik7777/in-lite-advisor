import React from 'react';
import {connect} from 'react-redux';
import CmsBlockGroup from './cmsBlock';
import {setIsFetching} from '../../reducer/fetchingReducer';

const CmsBlockContainer = (props) => {
    return (
        <CmsBlockGroup {...props}/>
    )
};

let mapStateToProps = (state) => {
    return {
        isFetching: state.fetching.isFetching,
    }
};

export default connect(mapStateToProps, {setIsFetching})(CmsBlockContainer);