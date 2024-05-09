import {useState,useEffect} from 'react'
import { postVoteByArticleId } from '../../api'
import styles from '../css/Vote.module.css'

function Vote (props){

const{article_id} = props
const{setSingleArticle} = props



const [voteCount, setVoteCount] = useState()
const [voteActivated, setVoteActivated] = useState(false)
const [vote, setVote] = useState({})

useEffect(()=>{

if(voteActivated){

    postVoteByArticleId(article_id,voteCount).then((updatedArticleVote)=>{
        setSingleArticle(updatedArticleVote)
        setVoteActivated(false)
    }).catch(()=>{

        alert('There has been an error processing your request...please try again later')


    })
}

},[voteCount])


function handleVoteChange(voteChange){

    setVoteActivated(true)
    setVoteCount(voteChange)

}

return(
    <section>

        <p className={styles.vote_text}>Click below to like this Article!:</p>
        <p onClick={()=>{handleVoteChange(1)}}><span className={styles.vote_box} id={styles.upvote_box}>+</span></p>
        <p className={styles.vote_text}>Click below to remove your like:</p>
        <p onClick={()=>{handleVoteChange(-1)}}><span className={styles.vote_box} id={styles.downvote_box} >-</span></p>
    </section>
)


}

export default Vote