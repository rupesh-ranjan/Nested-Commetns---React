import { useState } from "react";

function Comment({ comment }) {
    const [replyOpen, setReplyOpen] = useState(false);
    return (
        <div className="comment-container">
            <div className="">
                <p className="comment  text">
                    <b>{comment.text}</b>
                </p>
                <p className="comment vote">Votes: {comment.votes}</p>
                <p className="comment timestamp">
                    {new Date(comment.timestamp).toLocaleString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                </p>
            </div>
            <div className="comment-buttons">
                <button className="btn btn-comment">👍</button>
                <button className="btn btn-comment"> 👎</button>
                <button
                    className="btn btn-comment"
                    onClick={() => setReplyOpen(!replyOpen)}
                >
                    Reply
                </button>
                <button className="btn btn-comment">Edit</button>
                <button className="btn btn-comment">Delete</button>
            </div>
            {replyOpen &&
                comment.replies.map((reply) => (
                    <Comment key={reply.id} comment={reply} />
                ))}
        </div>
    );
}

export default Comment;
