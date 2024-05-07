import { fetchAllArticles } from "../../api";
import {useState,useEffect} from 'react';
import ArticlesCard from "./ArticlesCard"; 
import styles from "../css/Articles.module.css"




function Articles({setCurrentRoute}) {

  useEffect(() => setCurrentRoute(window.location.href), []);

    const [allArticles,setAllArticles] = useState([])

    useEffect(()=>{
        fetchAllArticles().then(({data})=>{
            setAllArticles(data.articles)
            
        })
    },[allArticles])

  

    
     return (
    <div>
      <section className={styles.articlearea}>
        <ul>
         <ArticlesCard allArticles={allArticles}/>
        </ul>
      </section>
    </div>
  );
}

export default Articles;
