const SELECT_GARDEN_ELEMENT = 'SELECT-GARDEN-ELEMENT';
const SET_QUESTIONS = 'SET-QUESTIONS';

let initialState = {
    gardenElements: [
        {
            id: 1,
            name: 'Boom',
            class: 'boom'
        },
        {
            id: 2,
            name: 'Terras',
            class: 'terrace'
        },
        {
            id: 3,
            name: 'Vidjver',
            class: 'pond'
        },
        {
            id: 4,
            name: 'Schutting',
            class: 'fence'
        },
        {
            id: 5,
            name: 'Pad',
            class: 'pad'
        }
    ],

    attributesGroupe: [
        {
            id: 1,
            attributes: ['color', 'custom_advisor_attribute', "custome_test2"],
        },
        {
            id: 2,
            attributes: ['custom_advisor_attribute', 'color', 'custome_test2'],
        },
        {
            id: 3,
            attributes: ['custom_advisor_attribute', 'color', 'color'],
        }
    ],

    questions: [],

    selectedGardenElement: null
};

const GardenEelementsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT-GARDEN-ELEMENT': {
            return {
                ...state,
                selectedGardenElement: action.key
            }
        }
        case 'SET-QUESTIONS': {
            return {
                ...state,
                questions: [
                    ...state.questions,
                    {
                        selectedGardenElement: action.selectedElement,
                        questions: {...action.questions}
                    }
                ]
            }
        }
        default:
            return state;

    }
};

export const selectGardenElement = (key) => ({type: SELECT_GARDEN_ELEMENT, key});
export const setQuestions = (selectedElement, questions) => ({type: SET_QUESTIONS, selectedElement, questions});

export default GardenEelementsReducer;