import React from 'react';
import StepResolver from './components/steps-resolver/main';
import Steps from './components/Steps/index';

import {setContext} from 'apollo-link-context';
import Adapter from './drivers/adapter';

import getBaseUrl from './utils/getBaseUrl';

import './App.css';

const apiBase = getBaseUrl() + '/graphql';

const testApi = 'https://in-lite.local.dev/nl/graphql';

const authLink = setContext((_, {headers}) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    };
});

const App = () => {
    return (
        <Adapter
            apiBase={testApi}
            apollo={{link: authLink.concat(Adapter.apolloLink(testApi))}}>
            <StepResolver steps={Steps}/>
        </Adapter>
    )
};


export default App;
