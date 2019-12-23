import React from 'react';

const Question = (props) => {

    let setValue = (value) => {
        props.setValue(value, props.attributes.attribute_code);
        props.next();
    };
    return (
        <div className="question">
            {props.attributes.attribute_options.map((item, id) => (
                <div className="row" key={id}>
                    <div>{item.label}</div>
                    <div onClick={() => {
                        setValue(item.value)
                    }}>{item.value}</div>
                </div>
            ))}
        </div>
    )
}

export default Question;