import { useState, useEffect } from "react";
import axios from "axios";
import ArticleBox from "./ArticleBox";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://be-nc-news-c6su.onrender.com/api/articles")
      .then((response) => {
        setArticles(response.data.articles);
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
