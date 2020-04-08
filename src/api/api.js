import gql from 'graphql-tag';

export const getAllTreeAPI = (client) => {
    return client.query({
        query: gql`{adviserData}`
    }).then(data => data.data);
};

export const getProductsResult = (client, idLastCategory) => {
    return client.query({
        query: gql`{adviserAssignedProducts(id:${idLastCategory}){
            id
            sku
            name
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
    }).then(data => data.data);
};