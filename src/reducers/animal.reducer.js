import {useReducer} from "react";

const init = {
    cats: [],
    dogs: []
};
const reducer = (state, action) => {
    const petKey = action.payload.pet + 's';

    switch (action.type) {
        case 'ADD' :
            return {
                ...state,
                [petKey]: [...state[petKey], action.payload.name]
            };

        case 'DELETE' :
            return {
                ...state,
                [petKey]: [...state[petKey].filter((pet, index) => index !== action.payload.id)]
            };
    }
};

const usePetReducer = () => useReducer(reducer, init);

export {
    usePetReducer
};