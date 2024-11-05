import { useState, useEffect } from "react";
import ArticleBox from "./ArticleBox";
import { fetchArticles } from "../utils/api";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles()
      .then((articlesData) => {
        setArticles(articlesData);
        setIsLoading(false);
      })
  }, []);

  if (isLoading) {
    return <p className="loading-msg">Loading...</p>
  }

  return <section className="articles-list">
    {articles.map((article) => {
      return <ArticleBox article={article} key={article.article_id} />
    })}
  </section>
}

export default Articles;
