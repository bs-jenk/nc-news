import { useContext, useState } from "react";
import UserContext from "../contexts/userContext";
import { deleteCommentById } from "../utils/api";

const CommentItem = ({ comment }) => {
  const { signedInUser } = useContext(UserContext);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    deleteCommentById(comment.comment_id)
      .then(() => {
        setIsDeleted(true);
      })
  }

  if (isDeleted) return <p>(Comment deleted by user)</p>

  return (
    <li>
      <p><strong>{comment.author}</strong> at {comment.created_at}:</p>
      {signedInUser === comment.author ? <button onClick={handleDelete}>Delete comment</button> : null}
      <p className="comment">"{comment.body}"</p>
    </li>
  )

}

export default CommentItem;
