const CommentItem = ({ comment }) => {

  return (
    <>
      <p><strong>{comment.author}</strong> at {comment.created_at}:</p>
      <p className="comment">"{comment.body}"</p>
    </>
  )

}

export default CommentItem;
