import { useContext, useState } from "react";
import { postCommentByArticleId } from "../utils/api";
import UserContext from "../contexts/userContext";

const CommentPoster = ({ article_id, comments, setComments, setNewCommentCount }) => {
  const { signedInUser } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleChange = (event) => {
    setNewComment(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsPosting(true);
    postCommentByArticleId(article_id, newComment, signedInUser)
      .then((response) => {
        setIsPosting(false);
        setComments([response, ...comments]);
        setNewCommentCount((currentCount) => currentCount + 1);
      })
      .catch(() => {
        setErrMsg("Error - please try again later")
        setIsPosting(false);
      });
  }

  if (isPosting) {
    return <p>Posting comment...</p>
  }

  return (
    <form id="new-comment-form" onSubmit={handleSubmit}>
      <label htmlFor="post-comment" id="post-comment-label">Post a new comment as <strong>{signedInUser}</strong>:</label><br></br><br></br>
      <input type="text" id="post-comment" onChange={handleChange} required /><br></br><br></br>
      <button type="submit">Post comment</button>
      <p id="comment-err-msg" className="err-msg">{errMsg}</p>
    </form>
  )
}

export default CommentPoster;
