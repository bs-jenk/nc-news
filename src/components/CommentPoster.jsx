import { useState } from "react";
import { postCommentByArticleId } from "../utils/api";

const CommentPoster = ({ article_id, comments, setComments }) => {
  const [newComment, setNewComment] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleChange = (event) => {
    setNewComment(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsPosting(true);
    postCommentByArticleId(article_id, newComment)
      .then((response) => {
        console.log(response, "<< new comment")
        setIsPosting(false);
        setComments([response, ...comments])
      })
      .catch(() => {
        setErrMsg("Error - please try again later")
        setIsPosting(false);
      })
  }

  if (isPosting) {
    return <p>Posting comment...</p>
  }

  return (
    <form id="new-comment-form" onSubmit={handleSubmit}>
      <label htmlFor="post-comment">Post a new comment as (_username):</label><br></br>
      <input type="text" id="post-comment" onChange={handleChange} required /><br></br>
      <button type="submit">Post comment</button>
      <p id="comment-err-msg" className="err-msg">{errMsg}</p>
    </form>
  )
}

export default CommentPoster;
