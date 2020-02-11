import React from 'react';
import StepResolver from './components/steps-resolver/main';
import Steps from './components/Steps/index';

import {setContext} from 'apollo-link-context';
import Adapter from './drivers/adapter';

import './App.css';

const apiBase = "https://in-lite.local.dev/graphql";

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
        <div className="in-lite-advisor">
            <Adapter
                apiBase={apiBase}
                apollo={{link: authLink.concat(Adapter.apolloLink(apiBase))}}>
                <StepResolver steps={Steps}/>
            </Adapter>
        </div>
    )
};


export default App;
