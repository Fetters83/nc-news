import {useState,useEffect} from 'react'
import { postCommentByArticleId } from '../../api'
import styles from '../css/PostComment.module.css'

function PostComment({onPost,username}){

   const [commentBody,setCommentBody] = useState('') 
   const [isFormValid,setIsFormValid] = useState(false)

    function handleSubmit(event){
        event.preventDefault();
        checkFormValidity(commentBody)
        if(isFormValid){
            const newComment = {
                comment_id:Date.now(),
                created_at:Date.now(),
                author: username,
                body:commentBody
            }
            onPost(newComment);
            setCommentBody('');
            setIsFormValid(false)
        } 

    }

    function checkFormValidity(comment){
        if(comment.length>0){
            setIsFormValid(true)
        } else{
            setIsFormValid(false)
            alert('You can not leave the comments box blank!')
        }
    }


    return(
        <>
        <section>

        </section>
        <form onSubmit={handleSubmit}>
            <textarea className={styles.textbox}value={commentBody} placeholder="Add a comment..." onChange={(event)=>{setCommentBody(event.target.value);checkFormValidity(event.target.value)}} ></textarea>
            <button className={styles.submitbtn} type='submit'>Submit</button>
        </form>
        </>
    )

}

export default PostComment