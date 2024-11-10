import { useState, useEffect } from "react";
import ArticleItem from "./ArticleItem";
import { fetchArticles } from "../utils/api";
import LoadingMsg from "./LoadingMsg";
import { useParams } from "react-router-dom";
import ErrorHandler from "./ErrorHandler";

const ArticleLister = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic_slug } = useParams();
  const [sortBy, setSortBy] = useState(null);
  const [order, setOrder] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticles(topic_slug, sortBy, order)
      .then((articlesData) => {
        setArticles(articlesData);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      })
  }, [topic_slug, sortBy, order]);

  if (isLoading) {
    return <LoadingMsg />
  }

  if (error) {
    return <ErrorHandler status={error.response.status} message={error.response.data.msg} />
  }

  const handleSelectedSortBy = (event) => {
    setSortBy(event.target.value);
  }

  const handleSelectedOrder = (event) => {
    setOrder(event.target.value);
  }

  return (
    <>
      <label>Sort by:
        <select onChange={handleSelectedSortBy}>
          <option value="created_at">date</option>
          <option value="comment_count">number of comments</option>
          <option value="votes">votes</option>
        </select>
      </label>
      <label>order:
        <select onChange={handleSelectedOrder}>
          <option value="desc">descending</option>
          <option value="asc">ascending</option>
        </select>
      </label>
      <ul className="article-list">
        {articles.map((article) => {
          return <ArticleItem article={article} key={article.article_id} />
        })}
      </ul>
    </>
  )
}

export default ArticleLister;
