import React, {Component} from 'react';
import {Query} from 'react-apollo';
import {loader} from 'graphql.macro';

const getAttributesData = loader('../../../queries/getCustomAttributesData.graphql');

export default class Step4 extends Component {

    render() {
        return (
            <div className="main-wrapper fourth-step">
                <div className="top-toolbar">
                    <button className="btn-prev" onClick={() => this.props.previous()}></button>
                </div>
                <Query query={getAttributesData} variables={
                    {"code": "color", "code2":"size", "code3":"custom_advisor_attribute", "entity": "4"}}>
                    {({loading, errors, data}) => {
                        if (loading) return 'Loading...';
                        if (errors) return `Error! ${errors.message}`;
                        return (
                            <div>
                                {data.customAttributeMetadata.items[0].attribute_options.map((item, id) => (
                                    <div className="row" key={id}>
                                        <div>{item.label}</div>
                                        <div>{item.value}</div>
                                    </div>
                                ))}
                                {data.customAttributeMetadata.items[1].attribute_options.map((item, id) => (
                                    <div className="row" key={id}>
                                        <div>{item.label}</div>
                                        <div>{item.value}</div>
                                    </div>
                                ))}
                                {data.customAttributeMetadata.items[2].attribute_options.map((item, id) => (
                                    <div className="row" key={id}>
                                        <div>{item.label}</div>
                                        <div>{item.value}</div>
                                    </div>
                                ))}
                            </div>
                        )
                    }}
                </Query>
                <div className="toolbar">
                    <button className="btn btn-next" onClick={() => this.props.next()}>naar de vragen</button>
                </div>

            </div>
        );
    }
}