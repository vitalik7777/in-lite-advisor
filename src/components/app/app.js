import React, {useMemo, useEffect} from 'react';
import TagManager from 'react-gtm-module'

import {setContext} from 'apollo-link-context';
import Adapter from '../../drivers/adapter';
import {useTranslation} from "react-i18next";

import StepResolver from '../../steps-resolver/stepResolver';
import Steps from '../../steps/index';
import '../../i18n';
import TranslationContext from '../../context/translateContext';

import './index.css';

const App = ({initialised, API, tagManagerId}) => {
    const {t} = useTranslation();

    const memoTranslate = useMemo(() => {
        return {t};
    }, [t]);

    useEffect(() => {
        TagManager.initialize(tagManagerId);
    }, [tagManagerId]);

    const authLink = setContext((_, {headers}) => {
        const token = localStorage.getItem('token');
        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : ''
            }
        };
    });

    return (
        <Adapter
            apiBase={API}
            apollo={{link: authLink.concat(Adapter.apolloLink(API))}}>
            <TranslationContext.Provider value={memoTranslate}>
                <StepResolver initialised={initialised} steps={Steps}/>
            </TranslationContext.Provider>
        </Adapter>
    )
};


export default App;
