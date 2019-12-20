import React from 'react';

const Block = (props) => {
    const {content: __html} = props;

    return(
        <div
            dangerouslySetInnerHTML={{__html}}
        />
    )
};

export default Block;
