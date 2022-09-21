import {useEffect, useState} from "react";

import {userService} from '../../services';
import {User} from "../user/User";
import {UserForm} from "../userForm/UserForm";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])

    return (
        <div>
            <UserForm setUsers={setUsers}/>
            {
                users.map(user => <User user={user} key={user.id}/>)
            }
        </div>
    );
};

export {Users};