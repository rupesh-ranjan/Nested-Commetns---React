import React from "react";

function Comment() {
    return (
        <div className="comment">
            <textarea
                rows={7}
                width="100%"
                placeholder="Add a new comment..."
                className="comment-text"
            />
            <button className="btn btn-comment">Add Comment</button>
        </div>
    );
}

export default Comment;
