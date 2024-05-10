import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import styles from '../css/Nav.module.css'

function Nav(){
   
  const {article_id} = useParams()


    return(<>
    <section  >
      <nav className={styles.navbar} >
        <Link className={styles.navelements} to="/">Home</Link>
        <Link  className={styles.navelements} to="/articles">Articles</Link>
        <Link  className={styles.navelements} to="/topics">Topics</Link>
               </nav>

    </section>
    </>)
}

export default Nav