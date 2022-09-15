function Comment(props) {
    const {comment} = props;

    return (
        <div>
            <h2>{comment.id} -- {comment.name}</h2>
        </div>
    );
}

export default Comment;