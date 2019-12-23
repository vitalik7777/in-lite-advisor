const SET_VALUE = 'SET-VALUE';

let initialState = {
    selectedValue: []
};

const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-VALUE': {
            return {
                ...state,
                selectedValue: [
                    ...state.selectedValue,
                    {
                        attribute: action.selectedElement,
                        vale: action.value
                    }
                ]
            }
        }

        default:
            return state;

    }
};

export const setValue = (value, selectedElement) => ({type: SET_VALUE, value, selectedElement});

export default questionsReducer;