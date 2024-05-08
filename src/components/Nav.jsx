import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import styles from '../css/Nav.module.css'

function Nav(){
   
  const {article_id} = useParams()


    return(<>
    <section className={styles.navbar}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
               </nav>

    </section>
    </>)
}

export default Nav