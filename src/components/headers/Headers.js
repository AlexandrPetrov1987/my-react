import {Link} from "react-router-dom";

import css from './Headers.module.css'

const Headers = () => {

    return (
        <div className={css.nav__menu}>
            <h3><Link to={'/'}>Menu</Link></h3>
            <div><Link to={'users'}><span className={css.nav__element}>Users</span></Link></div>
            <div><Link to={'posts'}><span className={css.nav__element}>Posts</span></Link></div>
            <div><Link to={'comments'}><span className={css.nav__element}>Comments</span></Link></div>
        </div>
    )
}
export {Headers};