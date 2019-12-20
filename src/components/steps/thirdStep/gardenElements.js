import React from 'react';

export const GardenElements = (props) => {
    return (
        <div className="garden-elements">
            {props.gardenElements.map(item =>
                <div onClick={() => {props.selectElement(item.id);props.next()}} key={item.id}
                     className={item.class}>{item.name}</div>
            )}
        </div>
    );
};