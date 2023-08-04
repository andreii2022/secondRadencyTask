// import React, { FC } from "react";
// import styles from "./NavBar.module.css";
// import Nav from "react-bootstrap/Nav";
// import { Link, useLocation } from "react-router-dom";

// const Navbar: FC = () => {
//   const location = useLocation();
//   return (
//     <Nav variant="tabs" defaultActiveKey="/">
//       <Nav.Item>
//         <Nav.Link
//           as={Link}
//           to="/"
//           active={location.pathname === "/"}
//           className={styles.Link}
//         >
//           Active
//         </Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link
//           className={styles.Link}
//           as={Link}
//           to="/archived"
//           active={location.pathname === "/archived"}
//         >
//           Archived
//         </Nav.Link>
//       </Nav.Item>
//     </Nav>
//   );
// };

// export default Navbar;
import React, { FC } from "react";
import styles from "./NavBar.module.css";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";

const Navbar: FC = () => {
  const location = useLocation();
  
  return (
    <Nav variant="tabs" defaultActiveKey="/">
      <Nav.Item>
        <Link
          to="/"
          className={`${styles.Link} ${location.pathname === "/" ? styles.active : ""}`}
        >
          Active
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          to="/archived"
          className={`${styles.Link} ${location.pathname === "/archived" ? styles.active : ""}`}
        >
          Archived
        </Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;

