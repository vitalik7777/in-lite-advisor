import React, {Component} from 'react';
import StepZilla from './components/steps-resolver/main';
import Steps from './components/Steps/index';

import {setContext} from 'apollo-link-context';
import Adapter from './drivers/adapter';

import './App.css';
import {withNamespaces} from "react-i18next";

const apiBase = "https://cors-anywhere.herokuapp.com/https://inlitedev.hypernode.io/graphql";

const authLink = setContext((_, {headers}) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
            'Access-Control-Allow-Origin': '*',
            //'Access-Control-Allow-Headers': 'Origin, Content-Type',
            //'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
           // 'Authorization': 'Basic ' + Buffer.from('inlite_beta' + ":" + '#xtcEb2q').toString('base64')
        }
    };
});

const App = () => {
  return (
      <div className="in-lite-advisor">
          <Adapter
              apiBase={apiBase}
              apollo={{link: authLink.concat(Adapter.apolloLink(apiBase))}}>
              <StepZilla steps={Steps}/>
          </Adapter>
      </div>
  )
};


export default App;
