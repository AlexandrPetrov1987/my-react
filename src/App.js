import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {Posts} from "./components";
import {AlbumsPage, CommentsPage, PostsPage, TodosPage} from "./pages";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'albums'} element={<AlbumsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}>
                    <Route path={':postId'} element={<Posts/>}/>
                </Route>
                <Route path={'todos'} element={<TodosPage/>}/>
                <Route path={'posts'} element={<PostsPage/>}/>
            </Route>

        </Routes>
    );
}

export default App;
