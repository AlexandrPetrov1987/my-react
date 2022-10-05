import {combineReducers} from "redux";

import {usersReducer} from "../reducers/usersReducer";
import {postsReducer} from "../reducers/postsReducer";
import {commentsReducer} from "../reducers/commentsReducer";

const reducer = combineReducers({
    usersReducer,
    postsReducer,
    commentsReducer

});

export {
    reducer
}