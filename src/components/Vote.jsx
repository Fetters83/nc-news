import {useState,useEffect} from 'react'
import { fetchArticleVotesByUserId, postVoteByArticleId } from '../../api'
import styles from '../css/Vote.module.css'
import unliked from '../assets/images/unliked.svg'
import liked from '../assets/images/liked.svg'

 function Vote ({article_id,votes,username}){



const [like,setLike] = useState(false)
const [voteCount,setVoteCount] = useState(votes)
const [isVoting,setIsVoting] = useState(false)



 useEffect(()=>{

    fetchArticleVotesByUserId(username,article_id).then((result)=>{
        setLike(result)
      
    })
  }, [username,article_id])   


function handleVoteChange(){
    if(isVoting) return;
    const voteIncrement = like ?-1:1
    
    setVoteCount((currentVotes)=> currentVotes + voteIncrement);
    setLike(!like);
    setIsVoting(true);

    postVoteByArticleId(article_id,voteIncrement,username).then(()=>{
      setIsVoting(false)
    }).catch((err)=>{
      alert('THere has been an error processing you request..please try again later')
      setVoteCount((currentVotes)=> currentVotes - voteIncrement);
      setLike(like);
      setIsVoting(false)
    })


}

return(
  
    <section className={styles.vote_container}>
      <p> {console.log(voteCount)}
              <span >votes </span>
              <span >{voteCount}</span>
            </p>
        <p >Click below to like this Article:</p>
       <img src={ like? liked: unliked} alt={ like? 'Liked Icon': 'Unliked Icon'} onClick={handleVoteChange}/>
    </section>
)

 }


export default Vote