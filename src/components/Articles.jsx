import { useState, useEffect } from "react";
import ArticleBox from "./ArticleBox";
import { fetchArticles } from "../utils/api";
import LoadingMsg from "./LoadingMsg";
import { useParams } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic_slug } = useParams();

  useEffect(() => {
    fetchArticles(topic_slug)
      .then((articlesData) => {
        setArticles(articlesData);
        setIsLoading(false);
      })
  }, [topic_slug]);

  if (isLoading) {
    return <LoadingMsg />
  }

  return <ul className="article-list">
    {articles.map((article) => {
      return <ArticleBox article={article} key={article.article_id} />
    })}
  </ul>
}

export default Articles;
