import { useState } from 'react';
import styles from './playerscreen.module.scss';
import data from './../../data/allData.json'

const PlayerScreen = () => {

    let players = ["white", "blue", "black", "red", "green"];
    let choosenPlayers = [];
    const [counter, setCounter] = useState(0);
    
    const chooseTarget = () => {
        setCounter(count => count + 1);
        console.log(counter)
    }


    return (

        <>
        <div className={styles.player_wrapper}>
            <div className={styles.player_con} style={{backgroundColor:data.white[0].bc}}>
                <header className={styles.player_head}>
                    <h1>{data.white[0].title}</h1>
                </header>
                <section className={styles.player_sec}>
                    <button onClick={chooseTarget} style={{backgroundColor:data.white[0].but}}>show target</button>
                    <div className={styles.player_target_con}>
                        <span className={styles.a_span}>assasinate</span>
                        <span className={styles.player_target}><p>Target</p></span>
                    </div>
                </section>
                <footer className={styles.player_foot}>
                    <button style={{backgroundColor:data.white[0].but}}>hide</button>
                </footer>
            </div>
        </div>
        </>
        
    )
}

export default PlayerScreen;