import styles from '../css/Nav2.module.css'
function Nav2(){
    return(
        <ul className={styles.nav_container}>
            <li className={styles.title}><a>NC News</a></li>
            <li className={styles.links}><a>Sort</a></li>
            <li className={styles.links}><a>Topics</a></li>
            <li className={styles.links}><a>Home</a></li>
        </ul>
    )
}

export default Nav2