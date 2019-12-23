import React from 'react';

const Button = (props) => {
    const {children, ...restProps} = props;

    return (
        <div className="toolbar">
            <button {...restProps}>
                <span>{children}</span>
            </button>
        </div>
    );
};

export default Button;
