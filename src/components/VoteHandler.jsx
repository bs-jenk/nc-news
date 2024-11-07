import { useEffect, useState } from "react";
import { updateVotesByArticleId } from "../utils/api";

const VoteHandler = ({ article_id, votes }) => {
  const [articleVotes, setArticleVotes] = useState(votes);
  const [isDisabled, setIsDisabled] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    updateVotesByArticleId(article_id, articleVotes)
      .catch(() => {
        setIsDisabled(true);
        setErrMsg('Error - please try voting again later');
      })
  }, [articleVotes]);

  const incrementVotes = () => {
    setArticleVotes(articleVotes + 1);
    setIsDisabled(true);
  }

  const decrementVotes = () => {
    setArticleVotes(articleVotes - 1);
    setIsDisabled(true);
  }

  return (
    <section className="votes-section">
      <h4>Votes: {articleVotes}</h4>
      <button className="vote-btns" onClick={incrementVotes} disabled={isDisabled}>Vote +1</button>
      <button className="vote-btns" onClick={decrementVotes} disabled={isDisabled}>Vote -1</button>
      <p id="vote-err-msg">{errMsg}</p>
    </section>
  )
}

export default VoteHandler;
