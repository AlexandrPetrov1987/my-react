import {LOAD_USERS} from "../actions/actions";

const usersReducer = (state = {users: []}, action) => {
    const {type, payload} = action;

    switch (type) {
        case LOAD_USERS:
            return {...state, users: payload};

        default:
            return state;
    }
}

export {
    usersReducer
}