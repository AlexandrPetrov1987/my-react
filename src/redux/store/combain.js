import {combineReducers} from "redux";

import {usersReducer} from "../reducers/usersReducer";
import {postsReducer} from "../reducers/postsReducer";
import {commentsReducer} from "../reducers/commentsReducer";
import {singleUserReducer} from "../reducers/singleUserReducer";

const reducer = combineReducers({
    usersReducer,
    singleUserReducer,
    postsReducer,
    commentsReducer

});

export {
    reducer
}