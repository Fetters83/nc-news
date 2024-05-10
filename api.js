import axios from "axios";

function fetchAllArticles() {
  return axios
    .get(`https://be-backend-project-nc-news.onrender.com/api/articles`)
    .then(({ data }) => {
      return data;
    });
}

function fetchArticle(article_id) {
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

function postVoteByArticleId(article_id, voteToPost) {
  return axios
    .patch(
      `https://be-backend-project-nc-news.onrender.com/api/articles/${article_id}`,
      { inc_votes: voteToPost }
    )
    .then(({ data: { updatedArticleVoteCount } }) => {
      return updatedArticleVoteCount;
    });
}

function postCommentByArticleId(article_id,username,commentBody){
 return axios
  .post(`https://be-backend-project-nc-news.onrender.com/api/articles/${article_id}/comments`,{username:username,body:commentBody}).then(({data:{comment}})=>{
    return comment
    
  })
}

function deleteCommentByCommentId(comment_id){
  console.log(typeof comment_id)
  return axios
  .delete(`https://be-backend-project-nc-news.onrender.com/api/comments/${comment_id}`).then(({data})=>{
      return data
  })
}


export {
  fetchAllArticles,
  fetchArticle,
  fetchCommentByArticleId,
  postVoteByArticleId,
  postCommentByArticleId,
  deleteCommentByCommentId
};
