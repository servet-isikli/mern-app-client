import React from "react";
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetailPage";
import CreateProductPage from "./pages/CreateProductPage";
import UpdateProductPage from "./pages/UpdateProductPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />{" "}
      <Route path="/create" element={<CreateProductPage />} />
      <Route path="/update/:productId" element={<UpdateProductPage />} />
      <Route path="/detail/:productId" element={<ProductDetailPage />} />
    </Routes>
  );
};

export default App;
