import React, {Component} from 'react';
import {Query} from 'react-apollo';
import {loader} from 'graphql.macro';

const getProductsDta = loader('../../../queries/getProductsDetail.graphql');
const ulrSite = "https://inlitedev.hypernode.io/";
export default class Step5 extends Component {

    render() {
        return (
            <div className="main-wrapper fourth-step">
                <div className="top-toolbar">
                    <button className="btn-prev" onClick={() => this.props.previous()}></button>
                </div>
                <Query query={getProductsDta} variables={{"name":"BIG NERO NARROW"}}>
                    {({loading, errors, data}) => {
                        if (loading) return 'Loading...';
                        if (errors) return `Error! ${errors.message}`;
                        return (
                            <div>
                                {data.productDetail.items.map((item, id) => (
                                    <div className="row" key={id}>
                                        <div>{item.name}</div>
                                        <div>{item.sku}</div>
                                        <div className="image">
                                            <a target="_blank" href={ulrSite + item.url_key}> <img width="200" src={item.image.url} /></a>
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
}