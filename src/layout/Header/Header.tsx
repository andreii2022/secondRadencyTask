import React, { FC } from "react";
import styles from "./Header.module.css";


const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div >
        <h3>Task Radency 2</h3>
      </div>
      
    </header>
  );
};

export default Header;
