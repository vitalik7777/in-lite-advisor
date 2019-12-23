import React from 'react';
import {GardenElements} from './gardenElements';
import {connect} from 'react-redux';
import {loader} from "graphql.macro";
import {selectGardenElement, setQuestions} from '../../../reducer/gardenEelementsReducer';

const getAttributesData = loader('../../../queries/getCustomAttributesData.graphql');

class GardenElementsContainer extends React.Component {
    getAttrubutes = (id) => {
        let attribute = this.props.attributesGroupe.find(item => item.id === id);

        let [code1 = '', code2 = '', code3 = ''] = attribute.attributes;

        this.props.client.query({
            query: getAttributesData,
            variables: {
                "code": code1,
                "code2": code2,
                "code3": code3,
                "entity": "4"
            }
        }).then((data) => {
            this.props.setQuestions(id, data.data.customAttributeMetadata.items);
            this.props.next()
        }).catch((err) => {
            console.log('catch', err)
        });
    };

    render() {
        return <GardenElements
            {...this.props}
            getAttrubutes={this.getAttrubutes}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        gardenElements: state.gardenElementsStep.gardenElements,
        attributesGroupe: state.gardenElementsStep.attributesGroupe,
        questions: state.gardenElementsStep.questions,
    }
};

export default connect(mapStateToProps, {
    selectGardenElement,
    setQuestions
})(GardenElementsContainer);