import { fetchCommentByArticleId, postCommentByArticleId } from "../../api";
import { useEffect, useState } from "react";
import PostComment from "./PostComment";
import styles from '../css/CommentsCard.module.css'


function CommentsCard({article_id,username}){

    const[comments,setComments] = useState([]);
    const[isComments,setIsComments] = useState(true);
    

    useEffect(()=>{
             fetchCommentByArticleId(article_id).then((comments)=>{
            setComments(comments)
        }).catch(()=>{
            setIsComments(false)
        })
    },[article_id])

   

    function handleNewComment(newComment){
        setComments((prevComments)=>[newComment,...prevComments])
        postCommentByArticleId(article_id,username,newComment.body)
    }

    return(
        <>
          <PostComment onPost={handleNewComment} username={username}/>
          {!isComments && <p>No comments yet....</p>}
          <section className={styles.grid_container}>
            
          {comments.map((comment)=>{
             const convertDate = new Date(comment.created_at);
              const newDate = convertDate.toLocaleDateString("en-gb");
            return(
               
                <section key={comment.comment_id} className={styles.comment_container}>
                    <p className={styles.comment_body}>{comment.body}</p>
                    <p className={styles.comment_info}> @{comment.author} - {newDate}</p>    
                </section>
               
            )
          })}
          </section>
        
        </>
      
    )

  



}

export default CommentsCard