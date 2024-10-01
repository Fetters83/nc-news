import { Link } from "react-router-dom";

import { useState } from "react";
import styles from '../css/ArticlesCard.module.css'

function ArticlesCard({ article, newDate,username}) {
  const [readButtonStatus, setReadButtonStatus] = useState(false);

  return (
    <>
    <li key={article.article_id} className={styles.article_card_container}>
        <img
          src={article.article_img_url}
          alt={`an image for ${article.title} by ${article.author}`}
        />
          <p className={styles.topic_name}>
          <span className={styles.article_topic_graphic}>|| </span>
          {article.topic}<span className={styles.article_date}>| {newDate}</span>
          <span className={styles.article_read_link}> <Link to={`/articles/${article.article_id}`}>Click to read</Link></span>
        </p>

        <p className={styles.article_title}>{article.title}</p>
      
      </li>


    </>
  );
}
export default ArticlesCard;
