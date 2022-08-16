import styles from './startscreen.module.scss'
import { Link } from "react-router-dom";

const StartScreen = () => {
    return (

        <>

        <div className={styles.start_wrapper}>
            <div className={styles.start_con}>
                <div className={styles.start_bgImage_con}>
                    <img src="./assets/background.jpg"></img>
                </div>
                <header className={styles.start_head}><h1>mtg <br></br>assassin</h1></header>
                <section className={styles.start_player_arrows}>
                    <div className={styles.white_a}><img src='./assets/white_arrow.png'/></div>
                    <div className={styles.blue_a}><img src='./assets/blue_arrow.png'/></div>
                    <div className={styles.start_player_head}><h2></h2></div>
                    <div className={styles.black_a}><img src='./assets/black_arrow.png'/></div>
                    <div className={styles.red_a}><img src='./assets/red_arrow.png'/></div>
                    <div className={styles.green_a}><img src='./assets/green_arrow.png'/></div>
                </section>
                <footer className={styles.start_button_con}>
                    <Link to="/playerscreen"><button>Begin</button></Link>
                </footer>
            </div>
        </div>
        
        </>
        
    )
}

export default StartScreen;