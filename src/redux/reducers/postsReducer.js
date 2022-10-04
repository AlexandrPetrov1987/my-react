import {LOAD_POSTS} from "../actions/actions";

const postsReducer = (state = {posts: []}, action) => {
    const {type, payload} = action;

    switch (type) {
        case LOAD_POSTS:
            return {...state, posts: payload};

        default:
            return state;
    }
}

export {
    postsReducer
}