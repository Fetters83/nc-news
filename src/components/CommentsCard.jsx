import { fetchCommentByArticleId } from "../../api"
import {useEffect, useState} from 'react'
import styles from '../css/CommentsCard.module.css'

function CommentsCard (props){

    const {article_id} = props

    const [comments, setComments] = useState([])
    const [isError, setIsError] = useState(false)

    useEffect(()=>{
        fetchCommentByArticleId(article_id).then((comments) => {
            setComments(comments)
        }).catch((err)=>{
           setIsError(true)
        })
    },[])
        
if(isError) return <p>No comments yet...</p>
return(<section key={`${article_id}-001`} className={styles.comment__card}>
    {comments.map((comment)=>{

const convertDate = new Date(comment.created_at)
const newDate = convertDate.toLocaleDateString('en-gb')
        return (<>
         <p key={`${article_id}- ${comment.comment_id}`}id={styles.comment__author}>@{comment.author} commented on:{newDate}</p>
        <p key={comment.comment_id} className={styles.comment__body}>{comment.body} </p>
       </>)
        
    })}
    
</section>

)

}

export default CommentsCard