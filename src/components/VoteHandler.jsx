const VoteHandler = ({ votes }) => {

  return (
    <section className="votes-section">
      <h4>Votes: {votes}</h4>
      <button className="vote-btns">Vote +1</button>
      <button className="vote-btns">Vote -1</button>
    </section>
  )
}

export default VoteHandler;
