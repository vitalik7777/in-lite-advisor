const SET_QUESTIONS = 'SET-QUESTIONS';

let initialState = {
    attributesGroupe: [
        {
            id: 1,
            attributes: ['color', 'custom_advisor_attribute', "size"],
        },
        {
            id: 2,
            attributes: ['custom_advisor_attribute', 'color', 'size'],
        },
        {
            id: 3,
            attributes: ['custom_advisor_attribute', 'color', 'size'],
        }
    ],

    questions: []
};

const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
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

export const setQuestionsAC = (selectedElement, questions) => ({type: SET_QUESTIONS, selectedElement, questions});

export default questionsReducer;