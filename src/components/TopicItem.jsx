import { Link } from "react-router-dom";

const TopicItem = ({ topic }) => {

  return (
    <li className="topic-item">
      <Link className="topic-links" to={`/topics/${topic.slug}`} >{topic.slug}</Link>
      <p>{topic.description}</p>
    </li>
  )
}

export default TopicItem;
