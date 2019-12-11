import React, {Component} from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';


const GET_ATTRIBUTES = gql`
    {
        customAttributeMetadata(
            attributes: {
                attribute_code: "color"
                entity_type: "4"
            }
        ) {
            items {
                attribute_code
                entity_type
                attribute_type
                attribute_options {
                    value
                    label
                }
            }
        }
    }
`;

export default class Step4 extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="main-wrapper fourth-step">
                <div className="top-toolbar">
                    <button className="btn-prev" onClick={() => this.props.previous()}></button>
                </div>
                <Query query={GET_ATTRIBUTES}>
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
                            </div>
                        )
                    }}
                </Query>
            </div>
        );
    }
}