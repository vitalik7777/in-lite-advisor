import {createStore, combineReducers} from 'redux';
import gardenElementsReduce from '../reducer/gardenEelementsReducer';
import questionsReducer from '../reducer/questionReducer';

let reducers = combineReducers({
    gardenElementsStep: gardenElementsReduce,
    questionsStep: questionsReducer
});
let store = createStore(reducers);

export default store;