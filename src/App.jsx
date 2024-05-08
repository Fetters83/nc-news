import { useState } from "react";
import { Routes, Route, useHref } from "react-router";
import Articles from "./components/Articles";

import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import SingleArticle from "./components/SingleArticle";
import Home from "./components/Home";



function App() {
 
  return (
	
    <main >

  <Header/>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/articles" element={<Articles />}/>
        <Route path="/articles/:article_id" element={<SingleArticle />}/>
       </Routes>
            
   	 </main>
  );
}

export default App;
