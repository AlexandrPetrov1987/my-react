import {useEffect, useState} from "react";

import Comment from "../comment/Comment";

function Comments() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then(value => value.json())
            .then(value => {
                setComments(value);
            });

    }, [])

    return (
        <div>
            {
                comments.map(value => <Comment key={value.id} comment={value}/>)
            }
        </div>
    );
}

export default Comments;