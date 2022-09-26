import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {Albums, Comments, Posts, Todos} from "./components";
import {AlbumsPage, CommentsPage, TodosPage} from "./pages";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'albums'} element={<AlbumsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}>
                    <Route path={':postId'} element={<Posts/>}/>
                </Route>
                <Route path={'todos'} element={<TodosPage/>}/>
            </Route>

        </Routes>
    );
}

export default App;
