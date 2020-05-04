import {getProductsAPI} from "../api/api";

const SET_PRODUCTS = 'SET-PRODUCTS';
const CLEAR_PRODUCTS = 'CLEAR-PRODUCTS';

let initialState = {
    summaryResult: null
};

const summaryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {
                ...state,
                summaryResult: action.products
            }
        }
        case CLEAR_PRODUCTS: {
            return {
                ...state,
                summaryResult: null
            }
        }
        default:
            return state;

    }
};

export const setProducts = (products) => ({type: SET_PRODUCTS, products});

export const clearProducts = (products) => ({type: CLEAR_PRODUCTS, products});

export const getProducts = (client, id) => {
    return (dispatch) => {
        getProductsAPI(client, id).then(data => {
            dispatch(setProducts(data.adviserAssignedProducts));
        }).catch((err) => {
            console.log('catch', err)
        });
    }
};

export default summaryReducer;