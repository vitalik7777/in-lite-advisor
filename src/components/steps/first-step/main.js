import React, {Component} from 'react';

export default class Step1 extends Component {

    render() {
        return (
            <div className="main-wrapper">
                <div className="head-title">Wecom bij de keuzehu</div>
                <p>
                    Het uitzoeken van tuinverlichting lijkt misschien ingewikkeld, maar is het niet! Met deze handige
                    keuzehulp ontdek je binnen een handomdraai welke tuinverlichting voor jouw tuin het meest geschikt
                    is.
                </p>
                <div className="toolbar">
                    <button className="btn btn-next" onClick={() => this.props.next()}>aan de slag</button>
                </div>
            </div>
        );
    }
}
