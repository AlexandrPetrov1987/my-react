import {Link, useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import css from './Headers.module.css'
import {LOAD_SINGLE_USER} from "../../redux";

const Headers = () => {

    const {user} = useSelector(state => state.usersReducer);

    const dispatch = useDispatch();

    const {id} = useParams();
    useEffect(() => {
        dispatch({type: LOAD_SINGLE_USER, payload: +id})
    },[id])

    return (
        <h2 className={css.nav__menu}>
            <h3><Link to={'/'}>Menu</Link></h3>
            <h4><Link to={'users'}>Users</Link></h4>
            <h4><Link to={'posts'}>Posts</Link></h4>
            <h4><Link to={'comments'}>Comments</Link></h4>
            <div>{user && (<div>{user.name}</div>)}</div>
        </h2>


    )
}
export {Headers};