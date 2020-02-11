const SET_PRODUCTS = 'SET-PRODUCTS';

let initialState = {
    summaryResult: []
};

const summaryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-PRODUCTS': {
            return {
                ...state,
                summaryResult: action.products
            }
        }

        default:
            return state;

    }
};

export const setSummaryResult = (products) => ({type: SET_PRODUCTS, products});

export default summaryReducer;