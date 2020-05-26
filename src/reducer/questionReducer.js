const SET_QUESTIONS = 'SET_QUESTIONS';
const SET_NESTED_QUESTION = 'SET-NESTED-QUESTION';
const SET_LAST_CATEGORY = 'SET-LAST-CATEGORY';
const SET_INDEX = 'SET-INDEX';
const SET_ID_FIRST_ANSWER = 'SET-ID-FIRST-ANSWER';

let initialState = {
    selectedElement: [],
    selectedNestedElement: [],
    idFirstSelectedAnswer: null,
    idLastCategory: null,
    indexCompletedQuestion: null
};

const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUESTIONS: {
            return {
                ...state,
                selectedElement: action.element.find(item => item.id === action.id)
            }
        }
        case SET_NESTED_QUESTION: {
            return {
                ...state,
                selectedNestedElement: action.element
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

export const setNestedQuestion = (element) => ({type: SET_NESTED_QUESTION, element});
export const setIDLastCategory = (id) => ({type: SET_LAST_CATEGORY, id});
export const setIndexCompletedQuestion = (id) => ({type: SET_INDEX, id});
export const setIdFirstSelectedAnswer = (id) => ({type: SET_ID_FIRST_ANSWER, id});
export const getQuestions = (element, id) => ({type: SET_QUESTIONS, element, id});

export default questionsReducer;
