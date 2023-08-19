import React from "react";
import ProductList from "../components/ProductList";
import BCommerce from "../components/BCommerce";
import { useProductListContext } from "../contexts/ProductListContext";

const Home = () => {
  const products = useProductListContext();

  return (
    <div>
      <h1>Home</h1>
      <ProductList products={products} />
      <BCommerce />
    </div>
  );
};

export default Home;
