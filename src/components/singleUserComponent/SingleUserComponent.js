import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

import {LOAD_SINGLE_USER} from "../../redux";
import {SingleUserDetails} from "../singleUserDetails/SingleUserDetails";

const SingleUserComponent = () => {

    const state = useSelector(state => state.usersReducer);

    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {
        dispatch({type: LOAD_SINGLE_USER, payload: +id})
    },[id])

    return (
        <div>
            {state.user && (<SingleUserDetails user={state.user}/>)}
        </div>
    )
}
export {SingleUserComponent};