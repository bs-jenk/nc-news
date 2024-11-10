import { useContext, useState } from "react";
import UserContext from "../contexts/userContext";
import { deleteCommentById } from "../utils/api";
import { formatDate, formatTime } from "../utils/formatDateTime";

const CommentItem = ({ comment, setNewCommentCount }) => {
  const { signedInUser } = useContext(UserContext);
  const [isDeleted, setIsDeleted] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleDelete = () => {
    deleteCommentById(comment.comment_id)
      .then(() => {
        setIsDeleted(true);
        setNewCommentCount((currentCount) => currentCount - 1);
      })
      .catch(() => {
        setErrMsg("Error - please try again later");
      });
  }

  if (isDeleted) return <p>(Comment deleted by user)</p>

  return (
    <li>
      <p><strong>{comment.author}</strong> at {formatTime(comment.created_at)} on {formatDate(comment.created_at)}:</p>
      {signedInUser === comment.author ? <button onClick={handleDelete}>Delete comment</button> : null}
      <p id="delete-comment-err-msg" className="err-msg">{errMsg}</p>
      <p className="comment">"{comment.body}"</p>
    </li>
  )

}

export default CommentItem;
