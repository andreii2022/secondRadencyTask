import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import Table from "./components/Table/Table";
import Navbar from "./components/NavbarMenu/Navbar";
import { categories } from "./material/categories";
import CategoryItem from "./components/Category/CategoryItem";
import { categoriesHead } from "./material/tableHeaders";

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="appContainer">
        <Navbar />
        <Outlet />
        <Table headers={categoriesHead}>
          {categories.map((item, index) => (
            <CategoryItem key={index} {...item} />
          ))}
        </Table>
      </div>
      <Footer />
    </div>
  );
};

export default App;
