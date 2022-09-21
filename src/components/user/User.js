import style from './User.module.css'

const User = ({user}) => {

    return (
        <div className={style.wrap}>
            <div>{user.name}</div>
            <div>{user.id}</div>
            <div>{user.username}</div>
            <div>{user.email}</div>

        </div>
    )
}
export {User};