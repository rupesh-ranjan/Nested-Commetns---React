import { useState } from "react";
import AddComment from "./AddComment";

function Comment({ addComment, comment, onSubmit = () => {} }) {
    const [expand, setExpand] = useState(false);
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
                    onClick={() => setExpand(!expand)}
                >
                    {expand ? "Hide Replies" : "Reply"}
                </button>
                <button className="btn btn-comment">Edit</button>
                <button className="btn btn-comment">Delete</button>
            </div>
            {expand && (
                <>
                    <AddComment
                        addComment={addComment}
                        commentId={comment.id}
                        onSubmit={onSubmit}
                    />
                    {comment.replies.map((reply) => (
                        <Comment
                            key={reply.id}
                            comment={reply}
                            onSubmit={onSubmit}
                            addComment={addComment}
                        />
                    ))}
                </>
            )}
        </div>
    );
}

export default Comment;
