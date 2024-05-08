import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/ArticlesCard.module.css";




function ArticlesCard(props) {

    const {article} = props
    const {newDate} = props
    
  

    return(
        <>
        <section>      
            <li key={article.article_id} className={styles.card}>
              <img
                src={article.article_img_url}
                alt={`an image for ${article.title} by ${article.author}`}
              />
              <p>
                <span className={styles.cardspan}>Topic: </span>
                {article.topic} {newDate}
              </p>
              <h2>{article.title}</h2>
              <p>
                <span className={styles.cardspan}>Created by: </span>
                {article.author}
              </p>
              <Link to={`/articles/${article.article_id}`}>
           <p>Click here to read article</p>
              </Link>
            </li>
      </section>
        
        </>
    )
    


}
 export default ArticlesCard;


  


