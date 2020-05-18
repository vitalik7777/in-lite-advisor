import React, {useMemo} from 'react';
import StepResolver from '../../steps-resolver/stepResolver';
import Steps from '../../steps/index';
import {setContext} from 'apollo-link-context';
import Adapter from '../../drivers/adapter';
import '../../i18n';

import './index.css';
import {useTranslation} from "react-i18next";
import TranslationContext from '../../context/translateContext';


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
    const {t} = useTranslation();

    let mt = useMemo(() => {
        return {t};
    }, [t]);

    return (
        <Adapter
            apiBase={props.API}
            apollo={{link: authLink.concat(Adapter.apolloLink(props.API))}}>
            <TranslationContext.Provider value={mt}>
                <StepResolver initialised={props.initialised} steps={Steps}/>
            </TranslationContext.Provider>
        </Adapter>
    )
};


export default App;
