import CommentItem from "./CommentItem";

const CommentLister = ({ comments }) => {

  return (
    <ul>
      {comments.map((comment) => {
        return <CommentItem comment={comment} key={comment.comment_id} />
      })}
    </ul>
  )
}

export default CommentLister;
