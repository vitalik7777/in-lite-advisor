import React from 'react';
import ErrorView from '../../errorView';
import Img from "../../imgComponent";

const GardenElements = ({gardenElements, selectGardenElement}) => {
    const setImg = (item) => {
        return {
            alt: item.name,
            src: item.thumbnail,
            width: '192',
            height: '192'
        }
    };

    return (
        <div className="garden-elements">
            {gardenElements.length === 0 ?
                <ErrorView notFoundGardenElement={true} /> :
                gardenElements.map(item =>
                    <div onClick={() => {selectGardenElement(item)}}
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
