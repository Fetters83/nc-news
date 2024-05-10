import { fetchCommentByArticleId } from "../../api";
import { useEffect, useState } from "react";
import styles from "../css/CommentsCard.module.css";
import PostComment from "./PostComment";

function CommentsCard({ article_id, username }) {
  const [comments, setComments] = useState([]);
  const [isError, setIsError] = useState(false);


  useEffect(() => {
    fetchCommentByArticleId(article_id)
      .then((comments) => {
        setComments(comments);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [comments]);

  if (isError) return <p>No comments yet...</p>;
  return (
    <section key={`${article_id}-001`} className={styles.comment__card}>
      <PostComment
        username={username}
        article_id={article_id}
        comments={comments}
        setComments={setComments}
       
      />
      {comments.map((comment) => {
        const convertDate = new Date(comment.created_at);
        const newDate = convertDate.toLocaleDateString("en-gb");
        return (
          <>
            <p
              key={`${article_id}- ${comment.comment_id}`}
              id={styles.comment__author}
            >
              @{comment.author} commented on:{newDate}
            </p>
            <p key={comment.comment_id} className={styles.comment__body}>
              {comment.body}{" "}
            </p>
          </>
        );
      })}
    </section>
  );
}

export default CommentsCard;
