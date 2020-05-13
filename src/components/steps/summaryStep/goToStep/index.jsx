import React from 'react';
import Button from "../../../button";

export default function ButtonGoToStep(props) {
    const {...restProps} = props;

    return (
        <div className="second-toolbar">
            <Button {...restProps} text="go to step with garden elements"/>
        </div>
    )
}