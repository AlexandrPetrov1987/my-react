import {LOAD_SINGLE_USER} from "../actions/actions";

const singleUserReducer = (state = {user: null}, action) => {
    const {type, payload} = action;

    switch (type) {
        case LOAD_SINGLE_USER:
            // let id = payload;
            // console.log(id);
            // console.log(state);
            // console.log(state.users);
            // const user = state.users.find(value => value.id === id);
            // console.log(user);
            return {...state, user: payload}

        default:
            return state;
    }
}

export {
    singleUserReducer
}