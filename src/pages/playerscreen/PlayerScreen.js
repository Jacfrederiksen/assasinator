import { useEffect, useState } from 'react';
import styles from './playerscreen.module.scss';
import data from './../../data/allData.json'
import PassOverlay from '../../components/passOverlay/PassOverlay';

const PlayerScreen = () => {

    const [show, setShow] = useState(false);
    const [count, setCount] = useState(0);
    const [selected, setSelected] = useState([]);
    const [targets, setTargets] = useState([]);

    
    const chooseTarget = () => {

        // Bruges til at skifte farve og tekst på playerscreen, dvs - vise næste spiller
        setCount(count => count +1);


        shuffle(data[count].target);

    }

    const shuffle = () => {

        setTargets(data[count].target.sort(() => Math.random() - 0.5))

        // Skal bruges til at pushe det valgte target ind i selected array
        setSelected(selected => [...selected, targets[0]])

        //setNames(current => [...current, 'Carl']);
        console.log(selected)


    }

    useEffect(() => {

        console.log(targets)

    },[targets])

    return (

        <>
        <div className={styles.player_wrapper}>
            <div className={styles.player_con} style={{backgroundColor:data[count].bc}}>
                <header className={styles.player_head}>
                    <h1>{data[count].title}</h1>
                </header>
                <section className={styles.player_sec}>
                    <button onClick={chooseTarget} style={{backgroundColor:data[count].but}}>show target</button>
                    <div className={styles.player_target_con}>
                        <span className={styles.a_span}>assasinate</span>
                        <span className={styles.player_target}><p>{data[count].target}</p></span>
                    </div>
                </section>
                <footer className={styles.player_foot}>
                    <button style={{backgroundColor:data[count].but}} onClick={() => setShow((s) => !s)}>hide</button>
                </footer>
            </div>
        </div>
        <PassOverlay show={show} closeModal={() => setShow(false)}/>
        </>
        
    )
}

export default PlayerScreen;