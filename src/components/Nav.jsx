import {useEffect} from 'react'
import { Link } from 'react-router-dom';

import styles from '../css/Nav.module.css'

function Nav(){
   

    return(<>
    <section className={styles.navbar}>
      <nav>
        <Link to="/">Home</Link>
     
      </nav>

    </section>
    </>)
}

export default Nav