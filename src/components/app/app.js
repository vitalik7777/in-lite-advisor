import React from 'react';
import StepResolver from '../../components/steps-resolver/main';
import Steps from '../../components/steps';
import {setContext} from 'apollo-link-context';
import Adapter from '../../drivers/adapter';

import './index.css';

const authLink = setContext((_, {headers}) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    };
});

const App = (props) => {
    return (
        <Adapter
            apiBase={props.API}
            apollo={{link: authLink.concat(Adapter.apolloLink(props.API))}}>
            <StepResolver steps={Steps}/>
        </Adapter>
    )
};


export default App;
