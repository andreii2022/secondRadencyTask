// import React, { FC } from "react";
// import { Outlet } from "react-router-dom";
// import "./App.css";
// import Header from "./layout/Header/Header";
// import Footer from "./layout/Footer/Footer";
// import Table from "./components/Table/Table";
// import Navbar from "./components/NavbarMenu/Navbar";
// import { categories } from "./material/categories";
// import CategoryItem from "./components/Category/CategoryItem";
// import { categoriesHead } from "./material/tableHeaders";

// const App: FC = () => {
//   return (
//     <div className="App">
//       <Header />
//       <div className="appContainer">
//         <Navbar />
//         <Outlet />
//         <Table headers={categoriesHead}>
//           {categories.map((item, index) => (
//             <CategoryItem key={index} {...item} />
//           ))}
//         </Table>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/layout/Header/Header";
import ActivePage from "./pages/ActivePage/ActivePage";
import ArchivePage from "./pages/ArchivePage/ArchivePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className="appContainer">
          <Routes>
            <Route path="/" element={<ActivePage />} />
            <Route path="archived" element={<ArchivePage />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2023 Your Company</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

