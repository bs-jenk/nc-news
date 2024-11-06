import { useEffect, useState } from "react";
import { fetchCommentsByArticleId } from "../utils/api";

const CommentManager = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchCommentsByArticleId(article_id).then((commentsData) => {
      setComments(commentsData);
    })
  }, [])

  return (
    <section>
      <p>Comments: </p>
    </section>
  )
}

export default CommentManager;
