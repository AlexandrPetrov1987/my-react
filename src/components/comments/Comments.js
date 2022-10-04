import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {commentsService, usersService} from "../../services";
import {LOAD_COMMENTS} from "../../redux";
import {Comment} from "../comment/Comment";

const Comments = () => {

    const state = useSelector(state => state.commentsReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        commentsService.getAll().then(({data}) => dispatch({type: LOAD_COMMENTS, payload: data}))

    }, []);

    return (
        <div>
            {
                state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    )
}
export {Comments};