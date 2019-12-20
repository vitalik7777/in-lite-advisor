import React, {Component} from 'react';
import CmsBlockGroup from '../../CmsBlock/cmsBlock';

export default class Step1 extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <CmsBlockGroup identifiers="advisor_first_step_content"/>
                <div className="toolbar">
                    <button className="btn btn-next" onClick={() => this.props.next()}>aan de slag</button>
                </div>
            </div>
        );
    }
}