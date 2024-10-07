import { Link } from 'react-router-dom';
import styles from '../css/Error.module.css'


function Error({message,clearError}){

    return(
        <>
        <h1 className={styles.error}>{message}: Please navigate back to the main menu <span><Link to='/' onClick={clearError}>Home</Link></span></h1>
        </>
    )

}

export default Error;