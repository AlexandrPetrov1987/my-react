import React, {useRef} from 'react';

import {usePetReducer} from "../reducers";

const Pets = ({pet}) => {
    const petFormInput = useRef();
    const [state, dispatch] = usePetReducer();
    const addHandle = () => {
        const {value: name} = petFormInput.current;
        dispatch({type: 'ADD', payload: {name, pet}});
        petFormInput.current.value = '';
    };
    const removeHandle = (id) => {
        dispatch({type: 'DELETE', payload: {id, pet}});
    };

    return (
        <div className="list">
            <div>
                <input type="text" ref={petFormInput}/>
                <button onClick={addHandle}>Add {pet}</button>
            </div>
            {state[pet + 's'].map((petName, index) => (
                <div key={index}>
                    {petName}
                    <button onClick={() => removeHandle(index)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default Pets;