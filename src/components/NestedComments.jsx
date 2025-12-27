// import Comment from "./Comment";

import { useState } from "react";

function NestedComments({ comments }) {
    const [replyOpen, setReplyOpen] = useState(false);

    return (
        <>
            {comments.map((comment) => (
                <div key={comment.id} className="nested-comments">
                    <>
                        <p className="nested-comment text">
                            <b>{comment.text}</b>
                        </p>
                        <p className="nested-comment vote">
                            Votes: {comment.votes}
                        </p>
                        <p className="nested-comment timestamp">
                            {new Date(comment.timestamp).toLocaleString(
                                "en-IN",
                                {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                }
                            )}
                        </p>
                    </>
                    <div className="nested-comments-buttons">
                        <button className="btn btn-nested">👍</button>
                        <button className="btn btn-nested"> 👎</button>
                        <button
                            className="btn btn-nested"
                            onClick={() => setReplyOpen(!replyOpen)}
                        >
                            Reply
                        </button>
                        <button className="btn btn-nested">Edit</button>
                        <button className="btn btn-nested">Delete</button>
                    </div>
                    {replyOpen && <NestedComments comments={comment.replies} />}
                </div>
            ))}
        </>
    );
}

export default NestedComments;
