import Comment from "./Comment";

import { useState } from "react";

function NestedComments({ comments }) {
    const [comment, setComment] = useState("");
    return (
        <>
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

            {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </>
    );
}

export default NestedComments;
