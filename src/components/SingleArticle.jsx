import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../utils/api";
import LoadingMsg from "./LoadingMsg";
import CommentManager from "./CommentManager";

const SingleArticle = () => {
  const [selectedArticle, setSelectedArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticleById(article_id)
      .then((articleData) => {
        setSelectedArticle(articleData)
        setIsLoading(false);
      })
  }, [])

  if (isLoading) {
    return <LoadingMsg />
  }

  return (
    <>
      <section className="selected-article">
        <h2>{selectedArticle.title}</h2>
        <p>Posted by <strong>{selectedArticle.author}</strong> on {selectedArticle.created_at}</p>
        <p>topic: #{selectedArticle.topic}</p>
        <img src={selectedArticle.article_img_url} alt="" />
        <p>{selectedArticle.body}</p>
        <p>votes: {selectedArticle.votes}</p>
      </section>
      <section className="comments">
        <CommentManager article_id={article_id} comment_count={selectedArticle.comment_count} />
      </section>
    </>
  )
}

export default SingleArticle;
