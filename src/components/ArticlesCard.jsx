import {useState} from 'react'
import styles from '../css/ArticlesCard.module.css'
<css />

function ArticlesCard({allArticles}){



    return(<>
    <section >
    {allArticles.map((article)=>{
            return <li key={article.article_id} className={styles.card}>
                <h2>{article.title}</h2>
                <p><span className={styles.cardspan}>Created by: </span>{article.author}</p>
                <p>{article.created_at}</p>
                <img src={article.article_img_url} alt={`an image for ${article.title} by ${article.author}`}  />
                <p><span className={styles.cardspan}>Topic: </span>{ article.topic}</p>
                <p><span className={styles.cardspan}>Votes</span> {article.votes}</p>
                </li>
          })}
    </section>

    </>
       
    )
}

export default ArticlesCard