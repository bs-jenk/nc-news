import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { fetchArticleById } from "../utils/api";

const SingleArticle = () => {
  const [selectedArticle, setSelectedArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleById(article_id)
      .then((articleData) => {
        setSelectedArticle(articleData)
      })
  }, [])

  return <section className="selected-article">
    <h2>{selectedArticle.title}</h2>
    <p>Posted by: {selectedArticle.author}</p>
    <p>Date: {selectedArticle.created_at}</p>
    <p>topic: #{selectedArticle.topic}</p>
    <img src={selectedArticle.article_img_url} alt="" />
    <p>{selectedArticle.body}</p>
    <p>votes: {selectedArticle.votes}</p>
    <p>comments: {selectedArticle.comment_count}</p>
  </section>
}

export default SingleArticle;
