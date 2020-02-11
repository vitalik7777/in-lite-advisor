import {createStore, combineReducers} from 'redux';
import gardenElementsReduce from '../reducer/gardenEelementsReducer';
import questionsReducer from '../reducer/questionReducer';
import fetchingReducer from '../reducer/fetchingReducer';
import summaryReducer from '../reducer/summaryReducer';

let reducers = combineReducers({
    gardenElementsStep: gardenElementsReduce,
    questionsStep: questionsReducer,
    fetching: fetchingReducer,
    summaryStep: summaryReducer
});
let store = createStore(reducers);

export default store;