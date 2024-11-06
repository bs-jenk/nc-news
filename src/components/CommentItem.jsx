const CommentItem = ({ comment }) => {

  return <p className="comment">"{comment.body}" <span><strong>- {comment.author}</strong> at {comment.created_at}</span></p>
}

export default CommentItem;
