const SELECT_GARDEN_ELEMENT = 'SELECT-GARDEN-ELEMENT';

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
        default:
            return state;

    }
};

export const selectGardenElementAC = (key) => ({type: SELECT_GARDEN_ELEMENT, key});

export default GardenEelementsReducer;