import { useState } from "react";
import { Routes, Route, useHref } from "react-router";
import Articles from "./components/Articles";

import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";


function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.href);
  return (
	
    <main onLoad={() => setCurrentRoute(window.location.href)}>
	
  <Header/>
  <Nav/>
      <Routes>
        <Route
          path="/"
          element={<Articles setCurrentRoute={setCurrentRoute} />}
        />
        </Routes>
        <Nav/>
       
   
	
    </main>
  );
}

export default App;
