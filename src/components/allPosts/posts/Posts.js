import {useEffect, useState} from "react";

import Post from "../post/Post";

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(value => value.json())
            .then(value => {
                setPosts(value)
            });
    }, [])


    return (
        <div className={'posts_div'}>
            {
                posts.map(value => <Post key={value.id} post={value}/>)
            }
        </div>
    );
}

export default Posts;