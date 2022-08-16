import React from 'react'
import styles from './errorscreen.module.scss'
import { Link } from "react-router-dom";

const ErrorScreen = () => {
  return (

    <>
    <div className={styles.error_wrapper}>
        <div className={styles.error_con}>
            <div className={styles.error_bgImage_con}>
                <img></img>
            </div>
            <header>
                <img></img>
            </header>
            <section>
                <p>A terrible error occurred!</p>
            </section>
            <footer>
                <Link to={"/"}><button>Try again?!</button></Link>
            </footer>
        </div>
    </div>
    </>
    
  )
}

export default ErrorScreen