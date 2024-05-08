import { useState, useEffect } from "react";
import { fetchArticle } from "../../api";
import { useParams } from "react-router-dom";
import styles from "../css/SingleArticle.module.css";
import CommentsCard from "./CommentsCard";

function SingleArticle() {
  const [singleArticle, setSingleArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  const { article_id } = useParams();

  useEffect(() => {
    fetchArticle(article_id).then(({ articles }) => {
      setSingleArticle(articles[0]);
      setIsLoading(false)
    });
  }, [isLoading]);


  const convertDate = new Date(singleArticle.created_at)
  const newDate = convertDate.toLocaleDateString('en-gb')

 
  if(isLoading) return <p>Loading...</p>
  return (
    <div>
      <section className={styles.articlearea}>
        <ul>
          <li key={singleArticle.article_id} className={styles.card}>
            <h2>{singleArticle.title}</h2>
            <p>
              <span className={styles.cardspan}>Created by: </span>
              {singleArticle.author}
            </p>
            <p>{newDate}</p>
            <img
              src={singleArticle.article_img_url}
              alt={`an image for ${singleArticle.title} by ${singleArticle.author}`}
            />
            <p>{singleArticle.body}</p>
            <p>
              <span className={styles.cardspan}>Votes</span>{" "}
              {singleArticle.votes}
            </p>
            <CommentsCard article_id={article_id}/>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default SingleArticle;
