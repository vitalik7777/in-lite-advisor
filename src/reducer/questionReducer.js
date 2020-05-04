const SET_NESTED_QUESTION = 'SET-NESTED-QUESTION';
const SET_LAST_CATEGORY = 'SET-LAST-CATEGORY';
const SET_INDEX = 'SET-INDEX';
const SET_ID_FIRST_ANSWER = 'SET-ID-FIRST-ANSWER';

let initialState = {
    selectedNestedElement: [],
    idFirstSelectedAnswer: null,
    idLastCategory: null,
    indexCompletedQuestion: null
};

const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NESTED_QUESTION: {
            return {
                ...state,
                selectedNestedElement: action.selectedElement
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
        case SET_ID_FIRST_ANSWER: {
            return {
                ...state,
                idFirstSelectedAnswer: action.id
            }
        }
        default:
            return state;

    }
};

export const setNestedQuestion = (selectedElement) => ({type: SET_NESTED_QUESTION, selectedElement});
export const setIDLastCategory = (id) => ({type: SET_LAST_CATEGORY, id});
export const setIndexCompletedQuestion = (id) => ({type: SET_INDEX, id});
export const setIdFirstSelectedAnswer = (id) => ({type: SET_ID_FIRST_ANSWER, id});

export default questionsReducer;