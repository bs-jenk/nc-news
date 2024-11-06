import axios from 'axios';

const api = axios.create({
  baseURL: 'https://be-nc-news-c6su.onrender.com/api',
});

const fetchArticles = () => {
  return api.get('/articles').then((response) => {
    return response.data.articles;
  });
};

const fetchArticleById = (articleId) => {
  return api.get(`/articles/${articleId}`).then((response) => {
    return response.data.article;
  });
};

const fetchCommentsByArticleId = (articleId) => {
  return api.get(`/articles/${articleId}/comments`).then((response) => {
    return response.data.comments;
  });
};

export { fetchArticles, fetchArticleById, fetchCommentsByArticleId };
