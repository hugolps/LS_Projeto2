import React from "react";

import { Route, Routes } from "react-router-dom";

import Camisa from './components/Camisa'
import Comprar from './components/Comprar'

const MainRoutes = () => {
  return (
  <Routes>
    <Route path="/store.html" element={<Camisa />} />
    <Route path="/comprar.html" element={<Comprar />} />
  </Routes>
  );
}

export default MainRoutes;