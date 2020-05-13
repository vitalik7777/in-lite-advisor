import React from 'react';

const toHTML = str => ({__html: str});

const RichText = (props) => {
    const {classes, content} = props;
    return (
        <div className={classes} dangerouslySetInnerHTML={toHTML(content)}/>
    );
};

export default RichText;
