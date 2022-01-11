import React from "react";
import styles from "./Modal.module.scss";

const Modal = (props) => {
  return (
    props.open && (
      <div className={styles.container}>
        <header>
          <h2>{props.title}</h2>
          <span onClick={props.onClose} className={styles.close}></span>
        </header>

        {props.children}
      </div>
    )
  );
};

export default Modal;
