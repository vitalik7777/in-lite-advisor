import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import gardenElementsReduce from '../reducer/gardenElementsReducer';
import questionsReducer from '../reducer/questionReducer';
import summaryReducer from '../reducer/summaryReducer';
import appReducer from '../reducer/appReducer';

let reducers = combineReducers({
    app: appReducer,
    gardenElementsStep: gardenElementsReduce,
    questionsStep: questionsReducer,
    summaryStep: summaryReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;