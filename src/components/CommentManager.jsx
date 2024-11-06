import { useEffect, useState } from "react";
import { fetchCommentsByArticleId } from "../utils/api";
import CommentLister from "./CommentLister";

const CommentManager = ({ article_id, comment_count }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchCommentsByArticleId(article_id).then((commentsData) => {
      setComments(commentsData);
    })
  }, [])

  return (
    <section className="comments-section">
      <h4>Comments ({comment_count}):</h4>
      <CommentLister comments={comments} />
    </section>
  )
}

export default CommentManager;
