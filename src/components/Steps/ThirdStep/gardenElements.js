import React from 'react';

export const GardenElements = (props) => {
    let selectElement = (id) => {
        props.selectGardenElement(id);
        props.getAttrubutes(id);
    };

    return (
        <div className="garden-elements">
            {props.gardenElements.map(item =>
                <div onClick={() => {selectElement(item.id)}} key={item.id}
                     className={item.class}>{item.name}</div>
            )}
        </div>
    );
};