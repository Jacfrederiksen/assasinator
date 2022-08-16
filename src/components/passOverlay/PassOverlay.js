import React from 'react'
import styles from './passoverlay.module.scss'
import ReactDOM from 'react-dom';

const PassOverlay = ({ show, counter, closeModal }) => {

  if (!show) return null;

  return ReactDOM.createPortal (

    <div className={styles.pass_wrapper}>
      <div className={styles.pass_con}>
        <header><h1>pass on</h1></header>
        <div className={styles.button_con}>
          <button id='pTarget' onClick={(e) => { counter(e); closeModal()}}>ready</button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default PassOverlay