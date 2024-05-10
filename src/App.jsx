import { useState } from "react";
import { Routes, Route, useHref } from "react-router";
import Articles from "./components/Articles";

import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import SingleArticle from "./components/SingleArticle";
import Home from "./components/Home";
import Topics from "./components/Topics";



function App() {

  const username= 'jessjelly'
  const [topicQuery,setTopicQuery] = useState('')

 
  return (
	
    <main >

  <Header/>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/articles" element={<Articles topicQuery={topicQuery}/>}/>
        <Route path="/articles/:article_id" element={<SingleArticle username={username}/>}/>
        <Route path="/topics" element={<Topics setTopicQuery={setTopicQuery}/>}/>
        <Route path={`/articles/topic=${topicQuery}`} element={<Articles topicQuery={topicQuery} />}/> *
       </Routes>
            
   	 </main>
  );
}

export default App;
