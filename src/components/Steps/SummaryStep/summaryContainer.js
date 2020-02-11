import React from 'react';
import {connect} from 'react-redux';
import Step5 from './main';
import SummaryPopUpContent from './summaryPopUp/summaryPopUpContent';
import {withNamespaces} from 'react-i18next';
import {setSummaryResult} from '../../../reducer/summaryReducer';
import gql from 'graphql-tag';
import PopUp from '../../PopUp/popUp';


const setProductsResult = (props) => {
    const GET_PRODUCTS = gql`
        {
            productDetail: products(filter: {
            ${props.selectedValue[0].attribute}: {eq: "${props.selectedValue[0].vale}"},
            ${props.selectedValue[1].attribute}: {eq: "${props.selectedValue[1].vale}"},
            ${props.selectedValue[2].attribute}: {eq: "${props.selectedValue[2].vale}"}
            }) {
                items {
                    __typename
                    id,
                    sku
                    name
                    url_key,
                    url_path,
                    price {
                        regularPrice {
                            amount {
                                currency
                                value
                            }
                        }
                    }
                    short_description {
                        html
                    }
                    media_gallery {
                        label
                        url
                    }
                }
            }
        }
    `;

    props.client.query({
        query: GET_PRODUCTS,
    }).then((data) => {
        props.setSummaryResult(data.data.productDetail.items);
    }).catch((err) => {
        console.log('catch', err)
    });
};

class SummaryContainerWithNamespaces extends React.Component {
    state = {
        seen: false,
        productID: null
    };

    togglePop = (id) => {
        this.setState({
            seen: !this.state.seen,
            productID: id
        });
    };

    render() {
        setProductsResult(this.props);
        return <>
            {this.props.summaryResult.length > 0 ? <Step5 {...this.props} togglePop={this.togglePop}/> : null}
            {this.state.seen ?
                <PopUp
                    t={this.props.t}
                    togglePop={this.togglePop}>
                    <SummaryPopUpContent
                        products={this.props.summaryResult}
                        productId={this.state.productID}/>
                </PopUp>
                : null}
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        selectedValue: state.questionsStep.selectedValue,
        summaryResult: state.summaryStep.summaryResult
    }
};

const SummaryContainer = withNamespaces()(SummaryContainerWithNamespaces);

export default connect(mapStateToProps, {setSummaryResult})(SummaryContainer);