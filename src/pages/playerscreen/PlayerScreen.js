import { useEffect, useState } from "react";
import styles from "./playerscreen.module.scss";
import data from "./../../data/allData.json";
import PassOverlay from "../../components/passOverlay/PassOverlay";
import { useNavigate } from "react-router-dom";

const PlayerScreen = () => {
  const [show, setShow] = useState(false); //Portal
  let [count, setCount] = useState(0); //Counter til chooseTarget, bruges til at skifte data og styling til næste spiller
  let [opponents, setOpponents] = useState([]); //Array med de shufflede elementer fra targets i data
  const [selected, setSelected] = useState([]); //Array med de valgte targets fra det shufflede array
  let navigate = useNavigate();

  const hide = () => {
    if (count === 4) {
        navigate("/", { replace: true });
        return;
    }
    setShow(true);
    document.querySelector('#ctTarget').style.display = "flex";
    document.querySelector("#p_target_con").style.display = "none";
    document.querySelector("#footer").style.display = "none";

  };

  const chooseTarget = (e) => {
    let footer = document.querySelector("#footer");
    if (e.target.id == "pTarget") setCount((count) => count + 1);


    if (e.target.id == "ctTarget") {
      shuffle(data[count].target);
  
      e.target.style.display = "none";
      document.querySelector("#p_target_con").style.display = "flex";
      document.querySelector("#footer").style.display = "flex";
    }
  };

  const shuffle = () => {
    console.log(count);
    setOpponents(data[count].target.sort(() => Math.random() - 0.5));
  };

  useEffect(() => {
    if (!opponents.length) return;
 
    setSelected((selected) => [...selected, opponents[0]]);

    opponents = opponents.filter((remove) => !selected.includes(remove));
    if (!opponents[0] && count === 4) {
        navigate("/", { replace: true });
        return;
    } 

    document.querySelector("#p_target_text").textContent = opponents[0];
    document.querySelector("#p_target_child").style.backgroundColor =
      opponents[0];

    if (opponents[0] && document.querySelector("#p_target_text").textContent == "white") {
      document.querySelector("#p_target_text").style.color = "black";
    }  else {
      document.querySelector("#p_target_text").style.color = "white";
    }

    console.log("OPPONENTS " + opponents);
    console.log("SELECTED " + selected);
    console.log("TARGET " + opponents[0]);
  }, [opponents]);

  return (
    <>
      <div className={styles.player_wrapper}>
        <div
          className={styles.player_con}
          style={{ backgroundColor: data[count].bc }}
        >
          <div className={styles.player_bgImage_con}>
            <img src={data[count].bgImage}></img>
          </div>
          <header className={styles.player_head}>
            <h1>{data[count].title}</h1>
          </header>
          <section className={styles.player_sec}>
            <button
              id="ctTarget"
              onClick={chooseTarget}
              style={{ backgroundColor: data[count].but }}
            >
              show target
            </button>
            <div className={styles.player_target_con} id="p_target_con">
              <span className={styles.a_span}><p>assasinate</p></span>
              <span className={styles.player_target} id="p_target_child">
                <p id="p_target_text">{data[count].target}</p>
              </span>
            </div>
          </section>
          <footer className={styles.player_foot} id="footer">
            <button style={{ backgroundColor: data[count].but }} onClick={hide}>
              hide
            </button>
          </footer>
        </div>
      </div>
        <PassOverlay
        show={show}
        closeModal={() =>
            setShow(false)}
        counter={chooseTarget}
      />
    </>
  );
};

export default PlayerScreen;
