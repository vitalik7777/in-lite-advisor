import React, {Component} from 'react';
import {ApolloClient} from 'apollo-client';
import {persistCache} from 'apollo-cache-persist';
import 'isomorphic-unfetch'
import {ApolloProvider} from 'react-apollo';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

export default class Adapter extends Component {
    static apolloLink(apiBase) {
        return createHttpLink({
            uri: apiBase
        });
    }

    static apolloCache() {
        const cache = new InMemoryCache();

        persistCache({
            cache,
            storage: window.localStorage
        });

        return cache;
    }

    static apolloClient({ apiBase, apollo: { cache, link } = {} }) {
        return new ApolloClient({
            fetchOptions: { fetch },
            link: link || Adapter.apolloLink(apiBase),
            cache: cache || Adapter.apolloCache()
        });
    }

    constructor(props) {
        super(props);
        const apollo = this.props.apollo || {};
        this.apolloClient =
            apollo.client || Adapter.apolloClient(this.props);
    }

    render() {
        const {children} = this.props;
        return (
            <ApolloProvider client={this.apolloClient}>
                {children}
            </ApolloProvider>

        );
    }
}
