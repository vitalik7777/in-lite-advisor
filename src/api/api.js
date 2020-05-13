import gql from 'graphql-tag';

export const getAllTreeAPI = (client) => {
    return client.query({
        query: gql`{adviserData}`
    }, {errorPolicy: 'all'}).then(data => data.data)
    .catch(({graphQLErrors, networkError}) => handlingError(graphQLErrors, networkError));
};

export const getProductsAPI = (client, idLastCategory) => {
    return client.query({
        query: gql`{adviserAssignedProducts(id:${idLastCategory}){
            id
            sku
            name
            url_key
            price {
                regularPrice {
                    amount {
                        currency
                        value
                    }
                }
            }
            short_description {
                html
            }
            description {
                html
            }
            media_gallery {
                url
                label
            }
            pdp_usp_1
            pdp_usp_2
            pdp_usp_3
        }}`
    }, {errorPolicy: 'all'}).then(data => data.data)
    .catch(({graphQLErrors, networkError}) => handlingError(graphQLErrors, networkError));
};

export const getCmsBlockAPI = (client, identifiers) => {
    return client.query({
        query: gql`{cmsBlocks(identifiers: "${identifiers}") {
            items {
                content
                identifier
            }
        }}`
    }, {errorPolicy: 'all'}).then(data => data.data)
    .catch(({graphQLErrors, networkError}) => handlingError(graphQLErrors, networkError));
};


function handlingError(graphQLErrors, networkError) {
    if (networkError) console.log(`[Network error]: ${networkError}`);

    if (graphQLErrors) {
        graphQLErrors.map(({message, locations, path}) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
        );
    }
}