import axios from 'axios';

function fetchAllArticles(){
   return axios.
    get(`https://be-backend-project-nc-news.onrender.com/api/articles`).then((response)=>{
        return response
    })

}

export {fetchAllArticles}
