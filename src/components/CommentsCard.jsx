import { fetchCommentByArticleId } from "../../api";
import { useEffect, useState } from "react";
import styles from "../css/CommentsCard.module.css";
import PostComment from "./PostComment";
import { deleteCommentByCommentId } from "../../api";



function CommentsCard({ article_id, username }) {
  const [comments, setComments] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false)
  const [commentId,setCommentId] = useState(0)


  useEffect(() => {
    fetchCommentByArticleId(article_id)
      .then((comments) => {
        setComments(comments);
      })
      .catch(() => {
        setIsError(true);
      });

 
  }, [comments]);

  useEffect(()=>{

      if(isDeleting){
      deleteCommentByCommentId(commentId).then(()=>{
       setIsDeleting(false)

      })
    }

  },[commentId])



  function handleDelete(event){
    setIsDeleting(true)
    setCommentId(event.comment_id)

  }

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
          <section className={styles.single_comment_card}>  <p 
              key={`${article_id}- ${comment.comment_id}`}
              id={styles.comment__author}
            ><span id={styles.author_text}> @{comment.author} commented on:{newDate}</span>
             
            </p>
         
            <p key={comment.comment_id} className={styles.comment__body}>
              {comment.body}{" "}
            </p>
            {comment.author===username && <button onClick={(event) =>{handleDelete(comment)}}>Remove comment</button>}
            {isDeleting && commentId === comment.comment_id && <p id={styles.deleting_comment}>Deleting comment .....</p>}</section>
          
          </>
        );
      })}
    </section>
  );
}

export default CommentsCard;
