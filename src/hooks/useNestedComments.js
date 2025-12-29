import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function useNestedComments(initialComments) {
    const [comments, setComments] = useState(initialComments);
    function insertReply(id, prevComments, reply) {
        return prevComments.map((comment) => {
            if (comment.id === id) {
                return { ...comment, replies: [reply, ...comment.replies] };
            } else if (comment.replies && comment.replies.length > 0) {
                return {
                    ...comment,
                    replies: insertReply(id, comment.replies, reply),
                };
            }
            return comment;
        });
    }

    function addComment(commentId, text) {
        console.log("Id added by rupesh", commentId);

        const newComment = {
            id: uuidv4(),
            author: "",
            text: text,
            timestamp: new Date().toISOString(),
            votes: 0,
            replies: [],
        };
        if (commentId) {
            // it means its a reply
            console.log("If block");
            console.log("Comment ID", typeof commentId);
            setComments((prevComment) =>
                insertReply(commentId, prevComment, newComment)
            );
        } else {
            // add new comment to top
            console.log("Else block");
            setComments((prev) => [newComment, ...prev]);
        }
    }

    return { comments, addComment };
}
