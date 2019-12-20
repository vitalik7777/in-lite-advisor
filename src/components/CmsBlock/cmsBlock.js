import React from 'react';
import {loader} from 'graphql.macro';
import {Query} from 'react-apollo';
import Block from './block';

const getCmsBlocks = loader('../../queries/getCmsBlocks.graphql');

const renderBlocks = ({data, error, loading}) => {
    if (error) {
        return <div>Data Fetch Error</div>;
    }

    if (loading) {
        return <div>Fetching Data</div>;
    }

    const items = data.cmsBlocks.items;

    if (!Array.isArray(items) || !items.length) {
        return <div>There are no blocks to display</div>;
    }

    const blocks = items.map((item, index) => (
        <Block
            key={item.identifier}
            index={index}
            {...item}
        />
    ));

    return (
        <div>{blocks}</div>
    )
};

const CmsBlockGroup = (props) => {
    const {identifiers} = props;

    return (
        <Query query={getCmsBlocks} variables={{identifiers}}>
            {renderBlocks}
        </Query>
    )
};

export default CmsBlockGroup;
