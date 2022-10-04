import {createStore} from "redux";

import {reducer} from "./combain";

const store = createStore(reducer);

export {
    store
}

