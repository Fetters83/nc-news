import {Link } from "react-router-dom";
import styles from '../css/Nav.module.css'


import { useState } from "react";
import { fetchTopics } from "../../api";

function Nav({setMobileSideNav}) {
  const [topics,setTopics] = useState([])
 

  const handleClick = () => {
    fetchTopics().then((data)=>{
      setTopics(data)
    })
  };

  const handleMenuClick = (status)=>{
    setMobileSideNav(status)
   
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
          <li>
            <a href="#Sort">Sort Articles</a>
          </li>
        </ul>
        <button className={styles.mobile_menu_button} onClick={(()=>{handleMenuClick(true)})}>
        <span>☰</span> Menu
      </button>
      </nav>
    </>
  );
}

export default Nav;
