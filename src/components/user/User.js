const User = ({user,getUserId}) => {

    return (
        <div>
            <span>{user.id} -- {user.name}</span>
            <button onClick={() => getUserId(user.id)}>Get posts</button>
        </div>
    )
}
export {User};