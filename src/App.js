import React from "react";
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetailPage";
import CreateProductPage from "./pages/CreateProductPage";
import UpdateProductPage from "./pages/UpdateProductPage";
import { Route, Routes } from "react-router-dom";
import DeleteProduct from "./components/DeleteProduct";
import ProductGet from "./components/ProductGet";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />{" "}
      <Route path="/create" element={<CreateProductPage />} />
      <Route path="/update/:productId" element={<UpdateProductPage />} />
      <Route path="/detail/:productId" element={<ProductDetailPage />} />
      <Route path="/delete/:productId" element={<DeleteProduct />} />
      <Route path="/get" element={<ProductGet />} />
    </Routes>
  );
};

export default App;
