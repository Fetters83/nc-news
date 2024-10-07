import {Link } from "react-router-dom";
import styles from '../css/Nav.module.css'


import { useState } from "react";
import { fetchTopics } from "../../api";

function Nav({setMobileSideNav,setSearchParams,urlPath}) {
  const [topics,setTopics] = useState([])
 

  const handleClick = () => {
    fetchTopics().then((data)=>{
      setTopics(data)
    })
  };

  const handleMenuClick = (status)=>{
    setMobileSideNav(status)
   
  }

  const handleSetSort = (sort)=>{
    const currentSearchParams = new URLSearchParams(window.location.search)
    
    Object.keys(sort).forEach((key)=>{
        currentSearchParams.set(key,sort[key])
    })
    setSearchParams(currentSearchParams)
    
}

  return (
    <>
      <nav className={styles.navbar}>
        <section className={styles.navbar_title}>NC-News</section>
        <ul className={styles.navbar_links} >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
           <section className={styles.dropdown}>
            <button className={styles.dropbtn} onClick={handleClick}>Topics</button>
            <section className={styles.dropdown_content}>
              {topics.map((topic)=>{
                return(<Link key={topic.slug} to={`/?topic=${topic.slug}`}>{topic.slug} </Link>)
              })}
            </section>
            </section>
          </li>
          {urlPath==="/" &&<li>
          <section className={styles.dropdown}>
            <button className={styles.dropbtn} onClick={handleClick}>Sort</button>
            <section className={styles.dropdown_content}>
            <a onClick={()=>{handleSetSort({sort_by:'created_at',order:'DESC'})}}>Date: Latest</a>
            <a onClick={()=>{handleSetSort({sort_by:'created_at',order:'ASC'})}}>Date: Oldest</a>
            <a onClick={()=>{handleSetSort({sort_by:'comment_count',order:'DESC'})}}>Comments: Most</a>
            <a onClick={()=>{handleSetSort({sort_by:'comment_count',order:'ASC'})}}>Comments: Least</a>
            <a onClick={()=>{handleSetSort({sort_by:'votes',order:'DESC'})}}>Most Popular</a>
            <a onClick={()=>{handleSetSort({sort_by:'votes',order:'ASC'})}}>Least Popular</a>
            </section>
            </section>
          </li>}
        </ul>
        <button className={styles.mobile_menu_button} onClick={(()=>{handleMenuClick(true)})}>
        <span>☰</span> Menu
      </button>
      </nav>
    </>
  );
}

export default Nav;
