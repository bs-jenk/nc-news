import { useState } from "react";
import { postCommentByArticleId } from "../utils/api";

const CommentPoster = ({ article_id }) => {
  const [newComment, setNewComment] = useState("");

  const handleChange = (event) => {
    setNewComment(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    postCommentByArticleId(article_id, newComment)
      .then((response) => {
        console.log(response, "<< new comment")
      })
  }

  return (
    <form id="new-comment-form" onSubmit={handleSubmit}>
      <label htmlFor="post-comment">Post a new comment as (_username):</label><br></br>
      <input type="text" id="post-comment" onChange={handleChange} required /><br></br>
      <button type="submit">Post comment</button>
    </form>

  )
}

export default CommentPoster;
