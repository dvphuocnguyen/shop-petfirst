import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import { TopHeader } from "../top-header/TopHeader";
import Header from "../Header/Header";

function HeaderRoute() {
  return (
    <Routes>
      <Route path="/topheader" exact component={TopHeader} />
      <Route path="/header" exact component={Header} />
    </Routes>
  );
}

export default HeaderRoute;
