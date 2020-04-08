import React from 'react';
import {loader} from 'graphql.macro';
import {Query} from 'react-apollo';
import Block from './block';

const getCmsBlocks = loader('../../queries/getCmsBlocks.graphql');

const CmsBlockGroup = (props) => {

    const {identifiers} = props;

    let setIsFetching = (loading) => {
        props.setIsFetching(loading);
    };

    return (
        <Query query={getCmsBlocks} variables={{identifiers}}>
            {({loading, error, data}) => {

                if (error) {
                    return <div>Data Fetch Error</div>;
                }

                if (loading) {
                    return <div>{setIsFetching(loading)}</div>
                }

                props.setIsFetching(false);

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
                    <>{blocks}</>
                )
            }}
        </Query>
    )
};

export default CmsBlockGroup;
