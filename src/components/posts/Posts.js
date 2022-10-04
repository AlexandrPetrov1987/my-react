import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {postsService} from "../../services";
import {Post} from "./Post";

const Posts = () => {
    const {postId} = useParams();

    const [post,setPost] = useState(null);
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        postsService.getPostCurrent(postId).then(({data}) => setPost(data))
    },[postId])

    useEffect(() => {
        postsService.getAllPosts().then(({data}) => setPosts(data))
    },[])

    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
            {post && <Post post={post}/>}
        </div>
    )
}
export {Posts};