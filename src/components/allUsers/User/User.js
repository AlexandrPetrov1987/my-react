function User(props) {
    const {user} = props;

    return (
        <div>
            <h2>{user.id} -- {user.name}</h2>
        </div>
    );
}

export default User;