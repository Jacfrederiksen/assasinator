import { useState } from 'react';
import styles from './playerscreen.module.scss';
import data from './../../data/allData.json'
import PassOverlay from '../../components/passOverlay/PassOverlay';

const PlayerScreen = () => {

    let players = ["white", "blue", "black", "red", "green"];
    let choosenPlayers = [];

    const [show, setShow] = useState(false);
    
    const chooseTarget = () => {

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
                    <button style={{backgroundColor:data.white[0].but}} onClick={() => setShow((s) => !s)}>hide</button>
                </footer>
            </div>
        </div>
        <PassOverlay show={show} closeModal={() => setShow(false)}/>
        </>
        
    )
}

export default PlayerScreen;