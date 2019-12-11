import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import StepZilla from './components/steps-resolver/main';
import Step1 from './components/steps/first-step/main';
import Step2 from './components/steps/second-step/main';
import Step3 from './components/steps/third-step/main';
import Step4 from './components/steps/fourth-step/main';

import './App.css';

const client = new ApolloClient({
    uri: "https://cors-anywhere.herokuapp.com/https://inlitedev.hypernode.io/graphql",
});

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.sampleStore = {

        };
    }

    getStore() {
        return this.sampleStore;
    }

    updateStore(update) {
        this.sampleStore = {
            ...this.sampleStore,
            ...update,
        }
    }

    render() {
        const steps =
            [
                {name: 'Step1', component: <Step1 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
                {name: 'Step2', component: <Step2 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
                {name: 'Step3', component: <Step3 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
                {name: 'Step4', component: <Step4 client={client} getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />}
            ];

        return (
            <div className="in-lite-advisor">
                <ApolloProvider client={client}>
                    <StepZilla  steps={steps}/>
                </ApolloProvider>
            </div>
        );
    }
}
