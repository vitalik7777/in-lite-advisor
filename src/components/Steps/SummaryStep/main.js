import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const ulrSite = "https://inlitedev.hypernode.io/";

const Step5 = (props) => {

    const GET_PRODUCTS = gql`
        {
            productDetail: products(filter: {
            ${props.selectedValue[0].attribute}: {eq: "${props.selectedValue[0].vale}"},
            ${props.selectedValue[1].attribute}: {eq: "${props.selectedValue[1].vale}"},
            ${props.selectedValue[2].attribute}: {eq: "${props.selectedValue[2].vale}"}
            }) {
                items {
                    __typename
                    sku
                    name
                    url_key
                    price {
                        regularPrice {
                            amount {
                                currency
                                value
                            }
                        }
                    }
                    description {
                        html
                    }
                    image {
                        label
                        url
                    }
                }
            }
        }
    `;


    return (
        <div className="main-wrapper fourth-step">
            <div className="top-toolbar">
                <button className="btn-prev" onClick={() => this.props.previous()}></button>
            </div>
            <Query query={GET_PRODUCTS}>
                {({loading, errors, data}) => {
                    if (loading) return 'Loading...';
                    if (errors) return `Error! ${errors.message}`;
                    console.log(data);
                    return (
                        <div>
                            {data.productDetail.items.map((item, id) => (

                                <div className="row" key={id}>
                                    <div>{item.name}</div>
                                    <div>{item.sku}</div>
                                    <div className="image">
                                        <a target="_blank" href={ulrSite + item.url_key}> <img width="200"
                                                                                               src={item.image.url}/></a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                }}
            </Query>
        </div>
    );
}

export default Step5;