import React from 'react';

const Button = (props) => {
    const {children, ...restProps} = props;

    return (
        <button {...restProps}>
            <span>{children}</span>
        </button>
    );
};

export default Button;
