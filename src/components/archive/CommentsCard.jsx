import { fetchCommentByArticleId } from "../../api";
import { useEffect, useState } from "react";


import PostComment from "./archive/PostComment";
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

 
  }, /* [comments]  */[]);

  useEffect(()=>{

      if(isDeleting){
      deleteCommentByCommentId(commentId).then(()=>{
       setIsDeleting(false)

      })
    }

  },/* [commentId] */[])



  function handleDelete(event){
    setIsDeleting(true)
    setCommentId(event.comment_id)

  }

  function handlePostComment(newComment){
    setComments((prevComments)=>{[...prevComments,newComment]})
  }

  if (isError) return <p>No comments yet...</p>;
  return (
    <section >
      <PostComment
        username={username}
        article_id={article_id}
        comments={comments}
        setComments={setComments}
        handlePostComment={handlePostComment}
       
      />
      {comments.map((comment) => {
        const convertDate = new Date(comment.created_at);
        const newDate = convertDate.toLocaleDateString("en-gb");
        return (
          <>
          <section >
            <p              
            ><span> @{comment.author} commented on:{newDate}</span>
            </p>
            <p key={comment.comment_id}>
              {comment.body}
            </p>
            {comment.author===username && <button onClick={(event) =>{handleDelete(comment)}}>Remove comment</button>}
            {isDeleting && commentId === comment.comment_id && <p> Deleting comment .....</p>}</section>
          
          </>
        );
      })}
    </section>
  );
}

export default CommentsCard;
