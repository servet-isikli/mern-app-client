import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import ProductCreatePage from "./pages/ProductCreatePage";
import ProductDelete from "./components/ProductDelete";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductUptadePage from "./pages/ProductUptadePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<ProductCreatePage />} />
      <Route path="/delete/:productId" element={<ProductDelete />} />
      <Route path="/detail/:productId" element={<ProductDetailPage />} />
      <Route path="/update/:productId" element={<ProductUptadePage />} />
    </Routes>
  );
};

export default App;
