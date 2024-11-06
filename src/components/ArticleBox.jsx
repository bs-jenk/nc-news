import { Link } from "react-router-dom";

const ArticleBox = ({ article }) => {
  return <section className='article-box'>
    <h3><Link to={`/articles/${article.article_id}`} >{article.title}</Link></h3>
    <img src={article.article_img_url} alt="" />
    <p>Date Posted: {article.created_at}</p>
    <p>Comments: {article.comment_count}</p>
    <p>Votes: {article.votes}</p>
  </section>
}

export default ArticleBox;
