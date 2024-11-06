import CommentItem from "./CommentItem";

const CommentLister = ({ comments }) => {

  return (
    <section>
      {comments.map((comment) => {
        return <CommentItem comment={comment} key={comment.comment_id} />
      })}
    </section>
  )
}

export default CommentLister;
