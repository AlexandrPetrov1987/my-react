import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {postsService} from "../../services";
import {Post} from "./Post";

const Posts = () => {
    const {postId} = useParams();

    const [post,setPost] = useState(null);

    useEffect(() => {
        postsService.getPostCurrent(postId).then(({data}) => setPost(data))
    },[postId])

    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    )
}
export {Posts};