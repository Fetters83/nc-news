import { Link } from 'react-router-dom'
import styles from '../css/MobileSideNav.module.css'
import { useState,useEffect } from "react";
import { fetchTopics } from "../../api";
import { useLocation } from 'react-router-dom';

function MobileSideNav({mobileSideNav,setMobileSideNav,setSearchParams}){

    let location  = useLocation();
    console.log(location)
   
    const [topics,setTopics] = useState([])

       useEffect(()=>{
        fetchTopics().then((data)=>{
            setTopics(data)
        })
       },[])

    const handleClose=(isOpen)=>{
        setMobileSideNav(isOpen)
    }

    const handleSetSort = (sort)=>{
        const currentSearchParams = new URLSearchParams(window.location.search)
        
        Object.keys(sort).forEach((key)=>{
            currentSearchParams.set(key,sort[key])
        })
        setSearchParams(currentSearchParams)
        setMobileSideNav(false)
    }

    return(<>
    {mobileSideNav && <section className={styles.sidenav}>
        <a href="#" className={styles.closebtn} onClick={()=>{handleClose(false)}}>X</a>
        <h3>Topics</h3>
        <Link to="/" onClick={()=>{handleClose(false)}}>All Articles</Link>
        {topics.map((topic)=>{
            return(<a key={topic.slug} onClick={()=>{handleSetSort({topic:topic.slug})}}>{topic.slug }</a>)
        }
        )}
        <h3>Sort</h3>
        <a onClick={()=>{handleSetSort({sort_by:'created_at',order:'DESC'})}}>Date: Latest</a>
        <a onClick={()=>{handleSetSort({sort_by:'created_at',order:'ASC'})}}>Date: Oldest</a>
        <a onClick={()=>{handleSetSort({sort_by:'comment_count',order:'DESC'})}}>Comments: Most</a>
        <a onClick={()=>{handleSetSort({sort_by:'comment_count',order:'ASC'})}}>Comments: Least</a>
        <a onClick={()=>{handleSetSort({sort_by:'votes',order:'DESC'})}}>Most Popular</a>
        <a onClick={()=>{handleSetSort({sort_by:'votes',order:'ASC'})}}>Least Popular</a>
        <a></a>
    </section>}
 
    </>
         
    
    )
}

export default MobileSideNav
