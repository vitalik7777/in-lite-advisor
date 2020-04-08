import React from 'react';

const TopToolbar = (props) => {

    const {children, ...restProps} = props;

    return (
        <div className="top-toolbar">
            <button className="btn-prev" {...restProps}>
                <span>{children}</span>
            </button>
        </div>
    );
};

export default TopToolbar;
