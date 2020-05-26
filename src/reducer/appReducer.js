import getBaseUrl from '../utils/getBaseUrl';
import getUrlLocale from '../utils/getUrlLocale';
import setStorageTimeStamp from '../utils/setStorage';

const SET_INITIALIZE = 'SET_INITIALIZE';
const SET_BASE_API = 'SET-BASE-API';
const SET_GTM_ID = 'SET-GTM-ID';

let initialState = {
    initialised: false,
    API: null,
    tagManagerId: {}
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZE: {
            return {
                ...state, initialised: true
            }
        }
        case SET_BASE_API: {
            return {
                ...state, API: action.api
            }
        }
        case SET_GTM_ID: {
            return {
                ...state,
                tagManagerId: {
                    gtmId: action.id
                }
            }
        }
        default:
            return state;
    }
};

const initializedSuccsess = () => ({type: SET_INITIALIZE});
const setBaseAPI = (api) => ({type: SET_BASE_API, api});
const setGtmId = (id) => ({type: SET_GTM_ID, id});

export const initializeApp = () => (dispatch) => {
    const API = process.env.NODE_ENV === 'production' ?
        (getBaseUrl() + '/graphql') :
        process.env.NODE_ENV === 'development' ?
            (process.env.REACT_APP_IN_LITE_DEVELOPMENT_API) :
            null;

    const timeStamp = process.env.REACT_APP_IN_LITE_TIME_STAMP_LOCAL_STORAGE;

    const gtmId = process.env.REACT_APP_IN_LITE_GTM_CONTAINER_ID;

    if (API) {
        dispatch(setBaseAPI(API));
        dispatch(setGtmId(gtmId));
        setStorageTimeStamp(timeStamp);

        if (getUrlLocale() !== localStorage.getItem('i18nextLng')) {
            localStorage.removeItem('apollo-cache-persist');
        }

        dispatch(initializedSuccsess());
    }
};

export default appReducer;
