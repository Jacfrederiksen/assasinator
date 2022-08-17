import { useEffect, useState } from "react";
import styles from "./playerscreen.module.scss";
import data from "./../../data/allData.json";
import PassOverlay from "../../components/passOverlay/PassOverlay";
import { useNavigate } from "react-router-dom";

let targetNames = [
  "white",
  "blue",
  "black",
  "red",
  "green"
]


const pregen = () => {
  let pregennedData = {}
  const randomTargetNames = targetNames.slice().sort(() => Math.random() - 0.5);

  for (let i = 0; i < randomTargetNames.length; i++) {
    let randomTarget = randomTargetNames[i];
    let keyName = targetNames[i];
    if (keyName === randomTarget) {
      return pregen();
    }
    pregennedData[keyName] = randomTarget;
  }

  return pregennedData;
}


const PlayerScreen = () => {
  const [show, setShow] = useState(false); //Portal
  let [count, setCount] = useState(0); //Counter til chooseTarget, bruges til at skifte data og styling til næste spiller
  const [targets, _] = useState(pregen());
  let navigate = useNavigate();


  useEffect(() => {
    /* console.log(targets); */
  }, [targets])

  
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
    if (e.target.id == "pTarget") setCount((count) => count + 1);
    if (e.target.id == "ctTarget") {
      /* console.log(targets[targetNames[count]]); */

      document.querySelector("#p_target_text").textContent = targets[targetNames[count]]
      document.querySelector("#p_target_child").style.backgroundColor =
      targets[targetNames[count]]

      if (targets[targetNames[count]] && document.querySelector("#p_target_text").textContent == "white") {
        document.querySelector("#p_target_text").style.color = "black";
      }  else {
        document.querySelector("#p_target_text").style.color = "white";
      }
  
      e.target.style.display = "none";
      document.querySelector("#p_target_con").style.display = "flex";
      document.querySelector("#footer").style.display = "flex";
    }
  };


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
                <p id="p_target_text">{targets[targetNames[count]]}</p>
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
