import "./App.css";
import Users from "./components/allUsers/Users/Users";
import Posts from "./components/allPosts/posts/Posts";
import Comments from "./components/allComments/comments/Comments";

function App() {
    return (
        <div className={'wrap'}>
            <Users/>
            <Posts/>
            <Comments/>
        </div>
    );
}

export default App;
