import React from "react";
import "./MainPagecss.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import HomePage from "../Pages/HomePage";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
