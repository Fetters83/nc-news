import { fetchAllArticles,fetchAllArticlesByTopic} from "../../api";
import {useState,useEffect} from 'react';
import ArticlesCard from "./ArticlesCard"; 
import styles from "../css/Articles.module.css"
import { useSearchParams } from 'react-router-dom';




function Articles({topicQuery}) {

      const [articles,setArticles] = useState([])
     

      const [searchParams, setSearchParams] = useSearchParams();
        
      const sortByQuery = searchParams.get('topic');
     
     


   
    useEffect(()=>{
      if(!sortByQuery) {
        fetchAllArticles().then(({articles})=>{
          setArticles(articles)
        
          })
      }
     
    },[])

    
    useEffect(()=>{

      if(sortByQuery) {
        fetchAllArticlesByTopic(sortByQuery).then(({articles})=>{
          setArticles(articles)
          
          })
      }
    
    },[sortByQuery])
    
 
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
