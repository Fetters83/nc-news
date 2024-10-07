import {useState,useEffect} from 'react'
import { postCommentByArticleId } from '../../../api'
import styles from '../css/PostComment.module.css'


function PostComment({article_id,username,comments,setComments,handlePostComment}){

    const [commentBody,setCommentBody] = useState('')
    const [isFormValid,setIsFormValid] = useState(false)
    const [isSubmittingBlankForm, setIsSubmittingBlankForm] = useState(false)

   

    useEffect(()=>{


        if(isFormValid){
            const today = new Date().toDateString()
            const newResult = [...comments,{author:username,body:commentBody}]
            setComments(newResult)

            postCommentByArticleId(article_id,username,commentBody).then((comment)=>{     
                setIsFormValid(false)
                setIsSubmittingBlankForm(false)
                alert('Your comment has been posted!') 

            }).catch(()=>{
                    alert('Please check you are entering valid text in your comment, then try again..')
            })
        }
    },/* [isFormValid],[isSubmittingBlankForm] */[])

    function handleClick(event){
       event.target.value=''
    }

    function handleSubmit(event){
       event.preventDefault()
        
       setCommentBody(event.target[0].value)
       checkFormValidity(event.target[0].value)
       /* event.target[0].value = ''   */
    }

    function checkFormValidity(newComment){

   

        if(newComment.length>0){

      
            setIsFormValid(true)
            setIsSubmittingBlankForm(false)
            const newResult = [...comments,{author:username,body:commentBody}]
            setComments(newResult)

            console.log(comments)
            
            

        } else {
            setIsSubmittingBlankForm(true)
        }
      

    }
   
  
    return (<section>
     
        <form onSubmit={(event)=>{handleSubmit(event)}}>      
            <textarea className={styles.textbox}onClick={(event)=>{handleClick(event)}}>Add comment....</textarea>
            {(isSubmittingBlankForm && <p className={styles.enter_valid_text_warning}>You must enter some valid text before you can submit anything.....</p> )}
           
            <button className={styles.submitbtn}type='submit'>Submit</button>
            
            
        </form>
    
        </section>)


}

export default PostComment