import { useEffect, useState } from "react";
import { fetchTopics } from "../utils/api";
import TopicItem from "./TopicItem";
import LoadingMsg from "./LoadingMsg";

const TopicLister = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTopics().then((topicsData) => {
      setTopics(topicsData);
      setIsLoading(false);
    })
  }, [])

  if (isLoading) {
    return <LoadingMsg />
  }

  return (
    <section className="topics">
      <h2>List articles from the following topics: </h2>
      <ul className="topic-list">
        {topics.map((topic) => {
          return <TopicItem topic={topic} key={topic.slug} />
        })}
      </ul>
    </section>
  )
}

export default TopicLister;
