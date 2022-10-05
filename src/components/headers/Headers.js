import {Link} from "react-router-dom";

import css from './Headers.module.css'

const Headers = () => {

    return (
        <h2 className={css.nav__menu}>
            <h3><Link to={'/'}>Menu</Link></h3>
            <h4><Link to={'users'}>Users</Link></h4>
            <h4><Link to={'posts'}>Posts</Link></h4>
            <h4><Link to={'comments'}>Comments</Link></h4>
        </h2>
    )
}
export {Headers};