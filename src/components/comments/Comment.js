import {Link} from "react-router-dom";

const Comment = ({comment}) => {

    return (
        <div>

            {comment.id} -- {comment.name}
            <span><Link to={comment.postId.toString()}>Get Post</Link></span>
        </div>
    )
}
export {Comment};