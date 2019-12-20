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
    ]
};

const GardenEelementsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SETUSERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;

    }
};


export const followAC = (userid) => ({type: FOLLOW, userid});

export const unfollowAC = (userid) => ({type: UNFOLLOW, userid});

export const setUsersAC = (users) => ({type: SETUSERS, users});

export default GardenEelementsReducer;