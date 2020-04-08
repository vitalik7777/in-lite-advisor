const SET_VALUE = 'SET-VALUE';
const SET_LAST_CATEGORY = 'SET-LAST-CATEGORY';
const SET_INDEX = 'SET-INDEX';
const SET_ID_FIRST_QUESTION = 'SET-ID-FIRST-QUESTION';

let initialState = {
    selectedValue: [],
    idFirstSelectedCategory: null,
    idLastCategory: null,
    indexCompletedQuestion: null
};

const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VALUE: {
            return {
                ...state,
                selectedValue: action.selectedElement
            }
        }
        case SET_LAST_CATEGORY: {
            return {
                ...state,
                idLastCategory: action.id
            }
        }
        case SET_INDEX: {
            return {
                ...state,
                indexCompletedQuestion: action.id
            }
        }
        case SET_ID_FIRST_QUESTION: {
            return {
                ...state,
                idFirstSelectedCategory: action.id
            }
        }
        default:
            return state;

    }
};

export const setValue = (selectedElement) => ({type: SET_VALUE, selectedElement});
export const setIDLastCategory = (id) => ({type: SET_LAST_CATEGORY, id});
export const setIndexCompletedQuestion = (id) => ({type: SET_INDEX, id});
export const setIdFirstSelectedQuestion = (id) => ({type: SET_ID_FIRST_QUESTION, id});

export default questionsReducer;