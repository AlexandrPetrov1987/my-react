import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

import {usersService} from "../../services";
import {LOAD_SINGLE_USER} from "../../redux";
import {SingleUserDetails} from "../singleUserDetails/SingleUserDetails";

const SingleUserComponent = () => {

    const state = useSelector(state => state.singleUserReducer);

    console.log(state);

    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {
        usersService.getById(id).then(({data}) => dispatch({type: LOAD_SINGLE_USER, payload: data}))
    },[id])

    return (
        <div>
            {state.user && (<SingleUserDetails user={state.user} key={state.user.id}/>)}
        </div>
    )
}
export {SingleUserComponent};