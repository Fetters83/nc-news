import {useState,useEffect} from 'react'
import { fetchTopics } from '../../api'
import styles from '../css/Topics.module.css'
import {Link} from "react-router-dom";

function Topics({setTopicQuery}){

    const [topics,setTopics] = useState([])

    useEffect(()=>{

        fetchTopics().then((topics)=>{
            
            setTopics(topics)

        })
    },[])

    function handleClick(topic){
        setTopicQuery(topic)
      
    }

    return(<section className={styles.topic_section} >
        <h2>List of Topics</h2>
        <ul >
            {topics.map((topic)=>{
                return <li key={topic.slug} className={styles.card}>{topic.slug}
                <Link to={`/articles?topic=${topic.slug}`}><p onClick={()=>{handleClick(topic.slug)}}>View articles about this topic</p></Link>
               </li>
            })}
        </ul>
    </section>)

}

export default Topics