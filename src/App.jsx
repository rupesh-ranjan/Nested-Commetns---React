import "./App.css";
import NestedComments from "./components/NestedComments";
import comments from "./data/comments.json";

function App() {
    return (
        <div className="app">
            <h1>Nested Comments</h1>
            <NestedComments
                comments={comments}
                onSubmit={(comments) => {}}
                onEdit={(comments) => {}}
                onDelete={(comments) => {}}
                onUpVote={(comments) => {}}
                onDownVote={(comments) => {}}
            />
        </div>
    );
}

export default App;
