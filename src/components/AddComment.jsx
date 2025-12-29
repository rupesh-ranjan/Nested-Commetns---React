import { useState } from "react";

function AddComment({ addComment, commentId, onSubmit = () => {} }) {
    const [comment, setComment] = useState("");

    function handleAddComment() {
        if (comment.trim()) {
            console.log(comment);
            addComment(commentId, comment);
            setComment("");
            onSubmit();
        }
    }

    return (
        <div className="add-comment">
            <textarea
                name="comment"
                rows={5}
                width="100%"
                placeholder="Add a new comment..."
                className="comment-textarea"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button className="btn btn-comment-add" onClick={handleAddComment}>
                Add Comment
            </button>
        </div>
    );
}

export default AddComment;
