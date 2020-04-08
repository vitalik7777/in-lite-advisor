import React from 'react';
import './thirdStep.css';

const GardenElements = (props) => {
    const {t} = props;

    let selectElement = (id) => {
        props.selectGardenElement(id);
        props.next();
    };

    console.log(props);

    return (
        <div className="garden-elements">
            {props.gardenElements.map(item =>
                <div onClick={() => {
                    selectElement(item.id)
                }}
                     key={item.id}
                     className="element">

                    <div className="element-icon">
                        <img alt={item.name} src={item.image}/>
                    </div>
                    {t(item.name)}
                </div>
            )}
        </div>
    );
};

export default GardenElements;