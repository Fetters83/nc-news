import { fetchAllArticles} from "../../api";
import { useState, useEffect } from "react";
import ArticlesCard from "./ArticlesCard";
import styles from '../css/Articles.module.css';
import Error from "./Error";

function Articles({searchParams,username,mobileSideNav,location,setUrlPath}) {
  const [articles, setArticles] = useState([]);
  const topicQuery = searchParams.get("topic"); 
  const sortQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");
  const [error,SetError] = useState(null)
  let searchQueryObj = {topic:topicQuery,sort_by:sortQuery,order:orderQuery};
  
 
  useEffect(() => {
    fetchAllArticles(searchQueryObj).then(({ articles }) => {
      setArticles(articles);
      setUrlPath(location.pathname)
    }).catch(({msg})=>{
      
      SetError(msg)
    });
  }, [topicQuery,sortQuery,orderQuery,mobileSideNav]);

  const clearError = () => SetError(null);

  if(error) return <Error message={error} clearError={clearError}/>
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
                mobileSideNav={mobileSideNav}
              />
            );
          })}
       
      </section>
    </>
  );
}

export default Articles;
