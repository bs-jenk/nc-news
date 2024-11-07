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

const updateVotesByArticleId = (articleId, number) => {
  const body = {
    inc_votes: number,
  };
  return api.patch(`/articles/${articleId}`, body).then((response) => {
    return response.data.updatedArticle;
  });
};

const postCommentByArticleId = (articleId, comment, user) => {
  const body = {
    username: 'tickle122',
    body: comment,
  };
  return api.post(`/articles/${articleId}/comments`, body).then((response) => {
    return response.data.newComment;
  });
};

export {
  fetchArticles,
  fetchArticleById,
  fetchCommentsByArticleId,
  updateVotesByArticleId,
  postCommentByArticleId,
};
