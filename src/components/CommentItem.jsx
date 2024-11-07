import { useContext } from "react";
import UserContext from "../contexts/userContext";

const CommentItem = ({ comment }) => {
  const { signedInUser } = useContext(UserContext);

  return (
    <li>
      <p><strong>{comment.author}</strong> at {comment.created_at}:</p>
      {signedInUser === comment.author ? <button>Delete comment</button> : null}
      <p className="comment">"{comment.body}"</p>
    </li>
  )

}

export default CommentItem;
