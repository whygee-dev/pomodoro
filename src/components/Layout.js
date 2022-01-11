import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.scss";

const Layout = (props) => {
  return (
    <>
      <Header backgroundColor={props.backgroundColor} />
      <main style={{ backgroundColor: props.backgroundColor }} className={styles.main}>
        {props.children}
      </main>
      <Footer style={{ backgroundColor: props.background }}></Footer>
    </>
  );
};

export default Layout;
