import { useEffect, useState } from "react";
import { updateVotesByArticleId } from "../utils/api";

const VoteHandler = ({ article_id, votes }) => {
  const [articleVotes, setArticleVotes] = useState(votes);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isIncreased, setIsIncreased] = useState(true);

  useEffect(() => {
    updateVotesByArticleId(article_id, articleVotes).then((updatedArticleData) => {
      console.log(updatedArticleData.votes, "<< db votes")
    })
  }, [articleVotes])

  const incrementVotes = () => {
    setArticleVotes(articleVotes + 1);
    setIsDisabled(true);
    setIsIncreased(true);
  }

  const decrementVotes = () => {
    setArticleVotes(articleVotes - 1);
    setIsDisabled(true);
    setIsIncreased(false);
  }

  return (
    <section className="votes-section">
      <h4>Votes: {articleVotes}</h4>
      <button className="vote-btns" onClick={incrementVotes} disabled={isDisabled}>Vote +1</button>
      <button className="vote-btns" onClick={decrementVotes} disabled={isDisabled}>Vote -1</button>
    </section>
  )
}

export default VoteHandler;
