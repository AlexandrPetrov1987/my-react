import {useDispatch} from "react-redux";

import css from './Car.module.css'
import {carActions} from "../../redux/slices";

const Car = ({car}) => {
    const {id, model, price, year} = car;

    const dispatch = useDispatch();

    return (
        <div className={css.car__item}>
            <div>id:{id}</div>
            <div>model:{model}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>Update car</button>
            <button onClick={() => dispatch(carActions.deleteCar({id}))}>Delete car</button>
        </div>
    )
}
export {Car};