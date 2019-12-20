import React from 'react';
import {loader} from "graphql.macro";

const getAttributesData = loader('../../../../queries/getCustomAttributesData.graphql');

export const FirstQuestion = (props) => {
    let attribute = props.attributes.find(item => item.id === props.selectedElement);
    let [code1 = '', code2 = '', code3 = ''] = attribute.attributes;
    if (props.questions.length === 0) {
        props.client.query({
            query: getAttributesData,
            variables: {
                "code": code1,
                "code2": code2,
                "code3": code3,
                "entity": "4"
            }
        }).then((data) => {
            props.setQuestions(props.selectedElement, data.data.customAttributeMetadata.items);
        }).catch((err) => {
            console.log('catch', err)
        });
    }

    let question = props.questions.find(item => item.selectedGardenElement === props.selectedElement);


    return (
        <div className="garden-elements">
            {props.questions.length ? question.questions[0].attribute_options.map((item, id) => (
                <div className="row" key={id}>
                    <div>{item.label}</div>
                    <div>{item.value}</div>
                </div>
            )) : ''}
        </div>
    );
};