import { Routes, Route, useHref } from "react-router";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle"
import "./App.css";
import Nav from "./components/Nav";
import { useSearchParams } from "react-router-dom";
import MobileSideNav from "./components/MobileSideNav";
import { useEffect, useState } from "react";




function App() {

  const [searchParams,setSearchParams] = useSearchParams();
  const [mobileSideNav,setMobileSideNav] = useState(false);
  const username = 'tickle122'

  useEffect(()=>{

  },[searchParams,mobileSideNav])

 
  return (
	
    <div className="App">

    <MobileSideNav mobileSideNav={mobileSideNav} setMobileSideNav={setMobileSideNav} setSearchParams={setSearchParams}/>
    <Nav setSearchParams={setSearchParams} setMobileSideNav={setMobileSideNav}/>
      <Routes>
        <Route path="/" element={<Articles searchParams={searchParams} username={username}/>}  />
        <Route path="/articles/:article_id" element={<SingleArticle username={username}/>}  />
       </Routes> 
            
   	 </div>
  );
}

export default App;
