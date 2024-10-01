import {useState,useEffect} from 'react'
import { fetchTopics } from '../../api'
import {Link} from "react-router-dom";

function Topics(){

    const [topics,setTopics] = useState([])
    

    useEffect(()=>{

        fetchTopics().then((topics)=>{
            
            setTopics(topics)

        })
    },[])



    return(<section  >
               <h2 >List of Topics</h2>
                   {topics.map((topic)=>{
                return <li key={topic.slug} >{topic.slug}
                <Link to={`/articles?topic=${topic.slug}`} ><p >View articles about this topic</p></Link>
               </li>
             
            })}
           </section>)

}

export default Topics