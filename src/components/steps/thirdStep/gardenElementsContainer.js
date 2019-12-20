import React from 'react';
import T from './users';
import {connect} from 'react-redux';

import {setUsersAC, unfollowAC, followAC} from '../../redux/usersReducer';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userid) => {
            dispatch(followAC(userid));
        },
        unfollow: (userid) => {
            dispatch(unfollowAC(userid));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
};

const ThirdStepContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default ThirdStepContainer;