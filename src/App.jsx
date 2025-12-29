import "./App.css";
import Comment from "./components/Comment";
import NestedComments from "./components/NestedComments";
import comments from "./data/comments.json";

function App() {
    return (
        <div className="app">
            <h1>Nested Comments</h1>
            <NestedComments comments={comments} />
        </div>
    );
}

export default App;
