const Comment = ({comment}) => {

    return (
        <div>
            {comment.id} -- {comment.email}
        </div>
    )
}
export {Comment};