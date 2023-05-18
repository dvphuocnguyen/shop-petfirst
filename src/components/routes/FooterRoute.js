import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import Footer from "../footer/Footer";

function FooterRoute() {
  return (
    <Routes>
      <Route path="/footer" exact component={Footer} />
    </Routes>
  );
}

export default FooterRoute;
