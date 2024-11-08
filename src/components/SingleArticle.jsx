import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../utils/api";
import LoadingMsg from "./LoadingMsg";
import CommentManager from "./CommentManager";
import VoteHandler from "./VoteHandler";
import { formatDate } from "../contexts/formatDateTime";

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
        <p>Posted by <strong>{selectedArticle.author}</strong> on {formatDate(selectedArticle.created_at)}</p>
        <p>topic: #{selectedArticle.topic}</p>
        <img className="article-img" src={selectedArticle.article_img_url} alt="" />
        <p>{selectedArticle.body}</p>
      </section>
      <VoteHandler article_id={article_id} articleVotes={selectedArticle.votes} />
      <CommentManager article_id={article_id} comment_count={selectedArticle.comment_count} />
    </>
  )
}

export default SingleArticle;
