import React from 'react';
import ErrorView from '../../errorView';
import Img from "../../imgComponent";

let setImg = (item) => {
    return {
        alt: item.name,
        src: item.thumbnail,
        width: '192',
        height: '192'
    }
};

const GardenElements = ({gardenElements, selectGardenElement, next}) => {
    let selectGardenElements = (id) => {
        selectGardenElement(id);
        next();
    };
    return (
        <div className="garden-elements">
            {gardenElements.length === 0 ?
                <ErrorView notFoundGardenElement={true} /> :
                gardenElements.map(item =>
                    <div onClick={() => {
                        selectGardenElements(item.id)
                    }}
                         key={item.id}
                         className="element">

                        <div className="element-icon">
                            <Img {...setImg(item)}/>
                        </div>
                        <div className="element-name">{item.name}</div>
                    </div>
                )
            }
        </div>
    );
};

export default GardenElements;
