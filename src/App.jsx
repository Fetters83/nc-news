import { Routes, Route, useHref } from "react-router";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle"
import "./App.css";
import Nav from "./components/Nav";
import { useSearchParams,useLocation } from "react-router-dom";
import MobileSideNav from "./components/MobileSideNav";
import { useEffect, useState } from "react";
import Error from "./components/Error";
import Nav2 from "./components/Nav2";




function App() {

  const [searchParams,setSearchParams] = useSearchParams();
  const [mobileSideNav,setMobileSideNav] = useState(false);
  const [disableButtons,setDisableButtons] = useState(false);

  let location = useLocation();
  const [urlPath,setUrlPath] = useState()

  const username = 'tickle122'

  useEffect(()=>{

  },[searchParams])

 
  return (
	
    <div className="App">

    <MobileSideNav mobileSideNav={mobileSideNav} setMobileSideNav={setMobileSideNav} setSearchParams={setSearchParams} setDisableButtons={setDisableButtons} urlPath={urlPath}/>
    <Nav setSearchParams={setSearchParams} setMobileSideNav={setMobileSideNav} urlPath={urlPath}/>
        <Routes>
        <Route path="/" element={<Articles searchParams={searchParams} username={username} mobileSideNav={mobileSideNav} location={location} setUrlPath={setUrlPath}/>}/>
        <Route path="/articles/:article_id" element={<SingleArticle username={username} mobileSideNav={mobileSideNav} location={location} setUrlPath={setUrlPath}/>}/>
        <Route path="*" element={<Error/>}/>
       </Routes> 
            
   	 </div>
  );
}

export default App;
