import getBaseUrl from "../utils/getBaseUrl";
import setStorageTimeStamp from "../utils/setStorage";

const SET_INITIALIZE = 'SET_INITIALIZE';
const SET_BASE_API = 'SET-BASE-API';

let initialState = {
    initialised: false,
    API: null,
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

        default:
            return state;
    }
};

const initializedSuccsess = () => ({type: SET_INITIALIZE});
const setBaseAPI = (api) => ({type: SET_BASE_API, api});

export const initializeApp = () => (dispatch) => {
    const API = process.env.NODE_ENV === 'production' ?
            (getBaseUrl() + '/graphql') :
            process.env.NODE_ENV === 'development' ?
            (process.env.REACT_APP_IN_LITE_DEVELOPMENT_API) :
            null;

    const timeStamp = process.env.REACT_APP_IN_LITE_TIME_STAMP_LOCAL_STORAGE;

    if (API) {
        dispatch(setBaseAPI(API));
        setStorageTimeStamp(timeStamp);
        dispatch(initializedSuccsess());
    }
};

export default appReducer;