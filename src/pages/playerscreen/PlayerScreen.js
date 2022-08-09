import { useEffect, useState } from 'react';
import styles from './playerscreen.module.scss';
import data from './../../data/allData.json'
import PassOverlay from '../../components/passOverlay/PassOverlay';

const PlayerScreen = () => {

    const [show, setShow] = useState(false);  //Portal
    const [count, setCount] = useState(0);  //Counter til chooseTarget, bruges til at skifte data og styling til næste spiller
    var [opponents, setOpponents] = useState([]); //Array med de shufflede elementer fra targets i data 
    const [selected, setSelected] = useState([]);  //Array med de valgte targets fra det shufflede array

    
    const chooseTarget = (e) => {

    /*setCount(count => count +1); */
        
        shuffle(data[count].target);
        e.target.style.display = "none";
        document.querySelector("#p_target_con").style.display="flex";
        document.querySelector("#footer").style.display="flex";
    }

    const shuffle = () => {

        console.log(count)

        setOpponents(data[count].target.sort(() => Math.random() - 0.5))
    }


    useEffect(() => {
        if (!opponents.length) return;
        setSelected(selected => [...selected, opponents[0]])

        opponents = opponents.filter(remove => !selected.includes( remove ));

        document.querySelector("#p_target_text").textContent=opponents[0];
        document.querySelector("#p_target_child").style.backgroundColor=opponents[0];

        console.log(opponents)
        console.log(selected);
        console.log(opponents[0]);

        },[opponents])

        //Filter, find eller reduce til at ungå gentagelser fra selected

    return (

        <>
        <div className={styles.player_wrapper}>
            <div className={styles.player_con} style={{backgroundColor:data[count].bc}}>
                <header className={styles.player_head}>
                    <h1>{data[count].title}</h1>
                </header>
                <section className={styles.player_sec}>
                    <button onClick={chooseTarget} style={{backgroundColor:data[count].but}}>show target</button>
                    <div className={styles.player_target_con} id="p_target_con">
                        <span className={styles.a_span}>assasinate</span>
                        <span className={styles.player_target} id="p_target_child"><p id="p_target_text">{data[count].target}</p></span>
                    </div>
                </section>
                <footer className={styles.player_foot} id="footer">
                    <button style={{backgroundColor:data[count].but}} onClick={() => setShow((s) => !s)}>hide</button>
                </footer>
            </div>
        </div>
        <PassOverlay show={show} closeModal={() => setShow(false)}/>
        </>
        
    )
}

export default PlayerScreen;