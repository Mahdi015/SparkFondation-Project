import React from "react";
import "./NavBar.css";
import styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarcontentlogo}>
        <a href="#">Banking System</a>
      </div>
      <div className={styles.navbarcontentlinks}>
        <a href="/">Home</a>
        <a href="#">Transfer Money</a>
      </div>
    </div>
  );
};

export default NavBar;
