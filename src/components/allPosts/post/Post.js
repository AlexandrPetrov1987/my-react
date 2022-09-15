function Post(props) {
    const {post} = props;

    return (
        <div>
            <h2>{post.title} -- {post.body}</h2>
        </div>
    );
}

export default Post;