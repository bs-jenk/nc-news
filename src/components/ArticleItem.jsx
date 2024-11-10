import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatDateTime";

const ArticleItem = ({ article }) => {

  return <li className='article-box'>
    <h3><Link to={`/articles/${article.article_id}`} >{article.title}</Link></h3>
    <img className='article-img' src={article.article_img_url} alt="" />
    <p>Date Posted: {formatDate(article.created_at)}</p>
    <p>Votes: {article.votes}</p>
    <p>Comments: {article.comment_count}</p>
  </li>
}

export default ArticleItem;
