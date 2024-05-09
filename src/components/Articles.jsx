import { fetchAllArticles} from "../../api";
import {useState,useEffect} from 'react';
import ArticlesCard from "./ArticlesCard"; 
import styles from "../css/Articles.module.css"




function Articles() {

      const [articles,setArticles] = useState([])
      const [isLoading, setIsLoading] = useState(true)

   
    useEffect(()=>{
      fetchAllArticles().then(({articles})=>{
      setArticles(articles)
       setIsLoading(false)
      })
    },[isLoading])

   
    
     if(isLoading) return <p>Loading....</p> 
     return (
    <div>
      <section className={styles.articlearea}>
        <ul>
          {articles.map((article)=>{
            const convertDate = new Date(article.created_at)
            const newDate = convertDate.toLocaleDateString('en-gb')
            return  <ArticlesCard article={article} key={article.article_id} newDate={newDate}/>
          })}
         
              </ul>
      </section>
    </div>
     
  );
}

export default Articles;
