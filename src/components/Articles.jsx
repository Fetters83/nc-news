import { fetchAllArticles} from "../../api";
import { useState, useEffect } from "react";
import ArticlesCard from "./ArticlesCard";
import styles from '../css/Articles.module.css'

function Articles({searchParams,username}) {
  const [articles, setArticles] = useState([]);
  const topicQuery = searchParams.get("topic"); 
  const sortQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order")
  let searchQueryObj = {topic:topicQuery,sort_by:sortQuery,order:orderQuery};

  useEffect(() => {
    fetchAllArticles(searchQueryObj).then(({ articles }) => {
      setArticles(articles);
    });
  }, [topicQuery,sortQuery,orderQuery]);

  return (
    <>
      <section className={styles.grid_container} >
          {articles.map((article) => {
            const convertDate = new Date(article.created_at);
            const newDate = convertDate.toLocaleDateString("en-gb");
            return (
              <ArticlesCard
                article={article}
                key={article.article_id}
                newDate={newDate}
                username={username}
              />
            );
          })}
       
      </section>
    </>
  );
}

export default Articles;
