const CommentItem = ({ comment }) => {

  return (
    <li>
      <p><strong>{comment.author}</strong> at {comment.created_at}:</p>
      <p className="comment">"{comment.body}"</p>
    </li>
  )

}

export default CommentItem;
