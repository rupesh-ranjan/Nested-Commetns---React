import { useState } from "react";

function AddComment() {
    const [comment, setComment] = useState("");

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
            <button className="btn btn-comment-add">Add Comment</button>
        </div>
    );
}

export default AddComment;
