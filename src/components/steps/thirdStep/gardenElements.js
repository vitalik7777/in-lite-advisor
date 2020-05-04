import React from 'react';
import './thirdStep.css';
import ErrorView from '../../errorView';
import Img from "../../imgComponent";

let setImg = (item) => {
    return {
        alt: item.name,
        src: item.image,
        width: '192',
        height: '192'
    }
};

const GardenElements = (props) => {
    let selectGardenElement = (id) => {
        props.selectGardenElement(id);
        props.next();
    };
    return (
        <div className="garden-elements">
            {props.gardenElements.length === 0 ?
                <ErrorView notFoundGardenElement={true} /> :
                props.gardenElements.map(item =>
                    <div onClick={() => {
                        selectGardenElement(item.id)
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