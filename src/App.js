import React, {Component} from 'react';
import StepZilla from './components/steps-resolver/main';
import Steps from './components/steps/index';
import {ApolloConsumer} from "react-apollo";

import {setContext} from 'apollo-link-context';
import Adapter from './drivers/adapter';

import './App.css';

const apiBase = "https://cors-anywhere.herokuapp.com/https://inlitedev.hypernode.io/graphql";

const authLink = setContext((_, {headers}) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    };
});

export default class App extends Component {
    render() {

        return (
            <div className="in-lite-advisor">
                <Adapter
                    apiBase={apiBase}
                    apollo={{link: authLink.concat(Adapter.apolloLink(apiBase))}}>
                    <StepZilla steps={Steps}/>
                </Adapter>
            </div>
        );
    }
}
