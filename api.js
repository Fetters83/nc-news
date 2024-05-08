import axios from 'axios';

function fetchAllArticles(){
   return axios.
    get(`https://be-backend-project-nc-news.onrender.com/api/articles`).then(({data})=>{
      return data
    })

}

function fetchArticle(article_id){
    return axios.
    get(`https://be-backend-project-nc-news.onrender.com/api/articles/${article_id}`).then(({data})=>{
       return data})
}

export {fetchAllArticles,fetchArticle}
