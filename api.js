import axios from "axios";

function fetchAllArticles(searchQueryObj) {
 
  return axios
    .get(`https://be-backend-project-nc-news.onrender.com/api/articles` ,{params:{topic:searchQueryObj.topic,sort_by:searchQueryObj.sort_by,order:searchQueryObj.order}} )
    .then(({ data }) => {
      return data;
    });
}

function fetchArticle(article_id) {
  console.log(article_id)
  return axios
    .get(
      `https://be-backend-project-nc-news.onrender.com/api/articles/${article_id}`
    )
    .then(({ data }) => {
      return data;
    });
}

function fetchCommentByArticleId(article_id) {
  return axios
    .get(
      `https://be-backend-project-nc-news.onrender.com/api/articles/${article_id}/comments`
    )
    .then(({ data: { comments } }) => {
      return comments;
    });
}

function postVoteByArticleId(article_id, voteToPost,username) {
  console.log(article_id,voteToPost,username)
  return axios
    .patch(
      `https://be-backend-project-nc-news.onrender.com/api/articles/${article_id}`,
      { inc_votes: voteToPost,username:username }
    )
    .then(({ data: { updatedArticleVoteCount } }) => {
      
      return updatedArticleVoteCount;
    }).catch(err=>{
      console.log(err)
    });
}

function postCommentByArticleId(article_id,username,commentBody){
 return axios
  .post(`https://be-backend-project-nc-news.onrender.com/api/articles/${article_id}/comments`,{username:username,body:commentBody}).then(({data:{comment}})=>{
    return comment
    
  })
}

function deleteCommentByCommentId(comment_id){
   return axios
  .delete(`https://be-backend-project-nc-news.onrender.com/api/comments/${comment_id}`).then(({data})=>{
      return data
  })
}

function fetchTopics(){

  return axios
  .get(`https://be-backend-project-nc-news.onrender.com/api/topics`).then(({data:{topics}})=>{

     return topics
  })

}

function fetchArticleVotesByUserId(username,article_id){
   return axios
  .post(`https://be-backend-project-nc-news.onrender.com/api/article_votes`,{username:username,article_id:article_id}).then(({data:{isInTable}})=>{
    console.log(isInTable.msg)
   return isInTable.msg
  }).catch((err)=>{
    console.log(err)
  })
}



export {
  fetchAllArticles,
  fetchArticle,
  fetchCommentByArticleId,
  postVoteByArticleId,
  postCommentByArticleId,
  deleteCommentByCommentId,
  fetchTopics,
  fetchArticleVotesByUserId
};
