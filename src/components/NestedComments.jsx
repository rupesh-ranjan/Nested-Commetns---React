import AddComment from "./AddComment";
import Comment from "./Comment";

function NestedComments({ comments }) {
    return (
        <>
            <AddComment />
            {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </>
    );
}

export default NestedComments;
