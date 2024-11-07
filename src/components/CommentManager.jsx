import { useEffect, useState } from "react";
import { fetchCommentsByArticleId } from "../utils/api";
import CommentLister from "./CommentLister";
import CommentPoster from "./CommentPoster";

const CommentManager = ({ article_id, comment_count }) => {
  const [comments, setComments] = useState([]);
  const [newCommentCount, setNewCommentCount] = useState(0);

  useEffect(() => {
    fetchCommentsByArticleId(article_id).then((commentsData) => {
      setComments(commentsData);
    })
  }, [])

  return (
    <section className="comments-section">
      <CommentPoster article_id={article_id} comments={comments} setComments={setComments} setNewCommentCount={setNewCommentCount} />
      <h4>Comments ({comment_count + newCommentCount}):</h4>
      <CommentLister comments={comments} setNewCommentCount={setNewCommentCount} />
    </section>
  )
}

export default CommentManager;
