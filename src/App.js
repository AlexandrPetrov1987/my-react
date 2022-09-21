import {useState} from "react";

import style from './App.module.css'
import {Posts, Users} from "./components";
import {postService} from "./services";

function App() {
    const [posts, setPosts] = useState([]);

    const getUserId = (userId) => {
        postService.getPostsByUserId(userId).then(({data}) => setPosts(data))
    }

    return (
        <div className={style.wrap}>
            <div className={style.innerDiv}><Users getUserId={getUserId}/></div>
            <div className={style.inner_div}><Posts posts={posts}/></div>
        </div>
    );
}

export default App;
