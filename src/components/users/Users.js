import {useEffect, useState} from "react";

import {getUsers} from "../services/users.service";
import {User} from "../user/User";
import {UserDetails} from "../user-details/User-details";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    const showUser = (obj) => {
        setUser(obj);
    }

    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
    }, [])

    return (
        <div>
            <div>
                {
                    users.map(user => <User key={user.id} user={user} showUser={showUser}/>)
                }
            </div>
            <div>
                {
                    user && <UserDetails key={user.id} user={user}/>
                }
            </div>
        </div>
    )
}
export {Users};