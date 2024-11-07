const TopicItem = ({ topic }) => {
  console.log(topic, "<< topic")
  return (
    <li className="topic-item">
      <a className="topic-links" href="">{topic.slug}</a>
      <p>{topic.description}</p>
    </li>
  )
}

export default TopicItem;
