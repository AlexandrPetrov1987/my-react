import {useReducer, useState} from "react";
import css from './App.module.css'

const reducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case 'addCat':
            return {...state, cats: [...state.cats, {name: payload, id: Date.now()}]};

        case 'deleteCat':
            return {...state, cats: state.cats.filter(cat => cat.id !== payload)};

        case 'addDog':
            return {...state, dogs: [...state.dogs, {name: payload, id: Date.now()}]};

        case 'deleteDog':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== payload)};

        default:
            console.error('');
            return state;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});
    const [cat, setCat] = useState('');
    const [dog, setDog] = useState('');

    const createCat = () => {
        dispatch({type: 'addCat', payload: cat});
        setCat('');
    }

    const createDog = () => {
        dispatch({type: 'addDog', payload: dog});
        setDog('');
    }

    return (
        <div className={css.style}>
            <div className={css.main}>
                <div className={css.input}>
                    <label>Cat name: <input type="text" onChange={({target}) => setCat(target.value)}
                                            value={cat}/></label>
                    <button onClick={() => createCat()}>Save cat</button>
                </div>

                <div>
                    {
                        state.cats.map(cat => (<div key={cat.id}>
                            {cat.name}
                            <button onClick={() => dispatch({type: 'deleteCat', payload: cat.id})}>delete cat</button>
                        </div>))
                    }
                </div>


            </div>

            <div className={css.main}>

                <div className={css.input}>
                    <label>Dog name: <input type="text" onChange={({target}) => setDog(target.value)}
                                            value={dog}/></label>
                    <button onClick={() => createDog()}>Save dog</button>

                </div>
                <div>
                    {
                        state.dogs.map(dog => (<div key={dog.id}>
                            {dog.name}
                            <button onClick={() => dispatch({type: 'deleteDog', payload: dog.id})}>delete dog</button>
                        </div>))
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
