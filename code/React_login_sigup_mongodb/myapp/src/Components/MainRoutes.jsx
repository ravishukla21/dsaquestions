import React from "react";
import "./MainPagecss.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import HomePage from "../Pages/HomePage";
import InfiniteScroll from "../Pages/InfiniteScroll";

const MainRoutes = () => {
  return (
    <div style={{border:2,borderColor:"red"}}>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/infiniteScroll" element={<InfiniteScroll/>}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
