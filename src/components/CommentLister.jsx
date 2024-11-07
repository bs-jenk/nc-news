import CommentItem from "./CommentItem";

const CommentLister = ({ comments, setNewCommentCount }) => {

  return (
    <ul className="comment-list">
      {comments.map((comment) => {
        return <CommentItem comment={comment} key={comment.comment_id} setNewCommentCount={setNewCommentCount} />
      })}
    </ul>
  )
}

export default CommentLister;
