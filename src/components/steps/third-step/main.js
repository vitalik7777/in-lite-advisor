import React, {Component} from 'react';
import gardenElements from './list-garden-elements';



export default class Step3 extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="main-wrapper second-step">
                <div className="top-toolbar">
                    <button className="btn-prev" onClick={() => this.props.previous()}></button>
                </div>
                <div className="head-title">Welk onderdeel wil je uitlichten</div>
                <p>
                    Je kunt later nag meer onderdelen selecteren.
                </p>
                <div className="garden-elements">
                    {gardenElements.gardenElements.map(item =>
                        <div key={item.objectID} className={item.class}>{item.name}</div>
                    )}
                </div>
            </div>
        );
    }
}