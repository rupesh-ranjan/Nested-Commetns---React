import AddComment from "./AddComment";
import Comment from "./Comment";
import { useNestedComments } from "../hooks/useNestedComments";

function NestedComments({ comments, onSubmit = () => {} }) {
    const { comments: commentsData, addComment } = useNestedComments(comments);
    console.log(commentsData);
    return (
        <>
            <AddComment addComment={addComment} onSubmit={onSubmit} />
            {commentsData.map((comment) => (
                <Comment
                    comments={commentsData}
                    key={comment.id}
                    comment={comment}
                    onSubmit={onSubmit}
                    addComment={addComment}
                />
            ))}
        </>
    );
}

export default NestedComments;
