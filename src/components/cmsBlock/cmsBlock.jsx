import React from 'react';
import Block from './block';

const CmsBlockGroup = ({cmsBlock}) => {
    const items = cmsBlock.cmsBlocks.items;

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
};

export default CmsBlockGroup;
