import {Link} from "react-router-dom";

const User = ({user}) => {

    return (
        <div>
            <div>{user.name} -- {user.email}</div>
            <span><Link to={user.id.toString()}>Go to single user page</Link></span>
        </div>
    )
}
export {User};