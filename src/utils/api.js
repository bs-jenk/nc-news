import axios from 'axios';

const api = axios.create({
  baseURL: 'https://be-nc-news-c6su.onrender.com/api',
});

const fetchArticles = (topic_slug, sort_by, order) => {
  return api
    .get('/articles', {
      params: {
        topic: topic_slug,
        sort_by: sort_by,
        order: order,
      },
    })
    .then((response) => {
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
    username: user,
    body: comment,
  };
  return api.post(`/articles/${articleId}/comments`, body).then((response) => {
    return response.data.newComment;
  });
};

const deleteCommentById = (commentId) => {
  return api.delete(`/comments/${commentId}`).then((response) => {
    return response.status;
  });
};

const fetchTopics = () => {
  return api.get(`topics`).then((response) => {
    return response.data.topics;
  });
};

export {
  fetchArticles,
  fetchArticleById,
  fetchCommentsByArticleId,
  updateVotesByArticleId,
  postCommentByArticleId,
  deleteCommentById,
  fetchTopics,
};
