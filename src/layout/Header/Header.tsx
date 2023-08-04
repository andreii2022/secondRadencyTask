// import React, { FC } from "react";
// import styles from "./Header.module.css";


// const Header: FC = () => {
//   return (
//     <header className={styles.header}>
//       <div >
//         <h3>Task Radency 2</h3>
//       </div>
      
//     </header>
//   );
// };

// export default Header;
import React from "react";
import { Link } from "react-router-dom";
import { BsBoxArrowInLeft } from "react-icons/bs";

const Header = () => {
  return (
    <header className="bg-dark py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          Notes App
        </Link>
      </div>
    </header>
  );
};

export default Header;
