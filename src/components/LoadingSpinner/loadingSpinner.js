import React from 'react';

const LoadingSpinner = (props) => {
    return (
        <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
            <div className="spinner-text">{props.text}</div>
        </div>
    )
};

export default LoadingSpinner;
