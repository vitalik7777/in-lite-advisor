import React from 'react';
import {connect} from 'react-redux';
import Step5 from './main';
import SummaryPopUpContent from './summaryPopUp/summaryPopUpContent';
import {withNamespaces} from 'react-i18next';
import {setSummaryResult} from '../../../reducer/summaryReducer';
import PopUp from '../../PopUp/popUp';
import {getProductsResult} from '../../../api/api';
import TopToolbar from "../../toolbar/top-toolbar";

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

        if (!this.state.seen) {
            window.scrollTo(0, 0);
        }
    };

    componentDidMount() {
        getProductsResult(this.props.client, this.props.idLastCategory).then((data) => {
            this.props.setSummaryResult(data.adviserAssignedProducts);
        }).catch((err) => {
            console.log('catch', err)
        });
    }


    render() {
        return <>
            <TopToolbar onClick={() => this.props.jumpToStep(this.props.indexCompletedQuestion)}>prev</TopToolbar>
            <Step5 {...this.props} togglePop={this.togglePop}/>
            {this.state.seen ?
                <PopUp
                    t={this.props.t}
                    togglePop={this.togglePop}>
                    <SummaryPopUpContent
                        products={this.props.summaryResult}
                        t={this.props.t}
                        productId={this.state.productID}/>
                </PopUp>
                : null}
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        idLastCategory: state.questionsStep.idLastCategory,
        summaryResult: state.summaryStep.summaryResult,
        indexCompletedQuestion: state.questionsStep.indexCompletedQuestion,
    }
};

const SummaryContainer = withNamespaces()(SummaryContainerWithNamespaces);

export default connect(mapStateToProps, {setSummaryResult})(SummaryContainer);