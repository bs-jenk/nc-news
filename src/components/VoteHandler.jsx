import { useEffect, useState } from "react";
import { updateVotesByArticleId } from "../utils/api";

const VoteHandler = ({ article_id, articleVotes }) => {
  const [vote, setVote] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    updateVotesByArticleId(article_id, articleVotes + vote)
      .catch(() => {
        setIsDisabled(true);
        setErrMsg('Error - please try voting again later');
      })
  }, [vote]);

  const incrementVotes = () => {
    setVote(vote + 1);
    setIsDisabled(true);
  }

  const decrementVotes = () => {
    setVote(vote - 1);
    setIsDisabled(true);
  }

  return (
    <section className="votes-section">
      <h4>Votes: {articleVotes + vote}</h4>
      <button className="vote-btns" onClick={incrementVotes} disabled={isDisabled}>Vote +1</button>
      <button className="vote-btns" onClick={decrementVotes} disabled={isDisabled}>Vote -1</button>
      <p id="vote-err-msg" className="err-msg">{errMsg}</p>
    </section>
  )
}

export default VoteHandler;
