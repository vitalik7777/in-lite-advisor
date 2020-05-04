import {getAllTreeAPI} from '../api/api';

const SELECT_GARDEN_ELEMENT = 'SELECT-GARDEN-ELEMENT';
const SET_GARDEN_ELEMENT = 'SET-GARDEN-ELEMENT';

let initialState = {

    gardenElements: [],

    selectedGardenElement: null
};

const GardenElementsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_GARDEN_ELEMENT: {
            return {
                ...state,
                selectedGardenElement: action.id
            }
        }
        case SET_GARDEN_ELEMENT: {
            return {
                ...state,
                gardenElements: action.gardenElementsTree
            }
        }
        default:
            return state;

    }
};

export const selectGardenElement = (id) => ({type: SELECT_GARDEN_ELEMENT, id});
export const setGardenElements = (gardenElementsTree) => ({type: SET_GARDEN_ELEMENT, gardenElementsTree});

export const getAllTree = (client) => {
    return (dispatch) => {
        getAllTreeAPI(client).then((data) => {
            let tree = JSON.parse(data.adviserData).children_data;
            let firstLevelQuestions = tree.filter(item => item.children_data.length > 0 && item.name);
            let secondLevelQuestions = firstLevelQuestions.filter(item => item.children_data[0].children_data.length > 0);
            dispatch(setGardenElements(secondLevelQuestions.slice(0, process.env.REACT_APP_IN_LITE_MAX_GARDEN_ELEMENT)));
        }).catch((err) => {
            console.log('catch', err)
        });
    }
};

export default GardenElementsReducer;