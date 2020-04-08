import {getAllTreeAPI} from '../api/api';

const SELECT_GARDEN_ELEMENT = 'SELECT-GARDEN-ELEMENT';
const SET_GARDEN_ELEMENT = 'SET-GARDEN-ELEMENT';


let initialState = {

    gardenElements: [],

    selectedGardenElement: null
};

const GardenEelementsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_GARDEN_ELEMENT: {
            return {
                ...state,
                selectedGardenElement: action.id
            }
        }
        case SET_GARDEN_ELEMENT: {
            let firstLevel = action.gardenElementTree.filter(item => item.children_data.length > 0);
            return {
                ...state,
                gardenElements: firstLevel.filter(item => item.children_data[0].children_data.length > 0)
            }
        }
        default:
            return state;

    }
};

export const selectGardenElement = (id) => ({type: SELECT_GARDEN_ELEMENT, id});
export const setGardenElements = (gardenElementTree) => ({type: SET_GARDEN_ELEMENT, gardenElementTree});

export const getAllTree = (client) => {
    return (dispatch) => {
        getAllTreeAPI(client).then((data) => {
            dispatch(setGardenElements(JSON.parse(data.adviserData).children_data));
        }).catch((err) => {
            console.log('catch', err)
        });
    }
};

export default GardenEelementsReducer;