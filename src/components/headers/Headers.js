import {Link} from "react-router-dom";

const Headers = () => {

    return (
        <div>
            <h2>Menu</h2>
            <div><Link to={'albums'}>Albums</Link></div>
            <div><Link to={'comments'}>Comments</Link></div>
            <div><Link to={'todos'}>Todos</Link></div>
            <div><Link to={'posts'}>Posts</Link></div>
        </div>
    )
}
export {Headers};