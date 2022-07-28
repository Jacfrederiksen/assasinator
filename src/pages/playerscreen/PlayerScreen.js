import styles from './playerscreen.module.scss'

const PlayerScreen = () => {


    return (

        <>
        <div className={styles.player_wrapper}>
            <div className={styles.player_con}>
                <header className={styles.player_head}>
                    <h1>White</h1>
                </header>
                <section className={styles.player_sec}>
                    <button>show target</button>
                    <div className={styles.player_target_con}>
                        <span className={styles.a_span}>assasinate</span>
                        <span className={styles.player_target}><p>Target</p></span>
                    </div>
                </section>
                <footer className={styles.player_foot}>
                    <button>hide</button>
                </footer>
            </div>
        </div>
        </>
        
    )
}

export default PlayerScreen;