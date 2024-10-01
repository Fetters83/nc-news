import { useState, useEffect } from "react";
import { fetchArticle, fetchArticleVotesByUserId } from "../../api";
import { useParams } from "react-router-dom";
import CommentsCard from "./CommentsCard";
import Vote from "./Vote";
import styles from '../css/SingleArticle.module.css'



function SingleArticle({username}) {
  const [singleArticle, setSingleArticle] = useState({});
 const [isLoading, setIsLoading] = useState(true); 
  const { article_id } = useParams();
  
 
  

  useEffect(
    () => {
      fetchArticle(article_id).then(({ articles }) => {
        setSingleArticle(articles[0]);
         setIsLoading(false); 
      });
    },
    [ isLoading] ,
    
  );


 

  const convertDate = new Date(singleArticle.created_at);
  const newDate = convertDate.toLocaleDateString("en-gb");

  if (isLoading) return <p>Loading...</p>; 
  return (

      <section className={styles.single_article_container} >
        <ul>
          <li key={singleArticle.article_id}   >
            <p className={styles.single_article_title}>{singleArticle.title}</p>
            <p >
              
              <span>@{singleArticle.author}</span>
              <span>| {newDate}</span>
            </p>
            <section className={styles.img_container}> <img 
              src={singleArticle.article_img_url}
              alt={`an image for ${singleArticle.title} by ${singleArticle.author}`}
            /></section>
           
            <p className={styles.article_body} >{singleArticle.body}</p>
              <Vote article_id={article_id} votes={singleArticle.votes} username={username}  />
            <CommentsCard
              article_id={article_id}
              username={username} 
            /> 
          </li>
        </ul>
      </section>
 
  );
}

export default SingleArticle;
