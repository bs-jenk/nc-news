import { useState, useEffect } from "react";
import ArticleItem from "./ArticleItem";
import { fetchArticles } from "../utils/api";
import LoadingMsg from "./LoadingMsg";
import { useParams } from "react-router-dom";

const ArticleLister = () => {
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
      return <ArticleItem article={article} key={article.article_id} />
    })}
  </ul>
}

export default ArticleLister;
