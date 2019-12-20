import React from 'react';
import GardenElementsContainer from './gardenElementsContainer';

export const ThirdStep = (props) => {
    return (
        <div className="main-wrapper">
            <div className="top-toolbar">
                <button className="btn-prev" onClick={() => props.previous()}></button>
            </div>
            <div className="head-title">Welk onderdeel wil je uitlichten</div>
            <p>
                Je kunt later nag meer onderdelen selecteren.
            </p>
            <GardenElementsContainer {...props}/>
        </div>
    );
}