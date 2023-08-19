import React from "react";
import { useProductListContext } from "../contexts/ProductListContext";

const ProductList = () => {
  const products = useProductListContext();

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products === "loading" ? (
          <p>Loading...</p>
        ) : (
          products.map((product) => <li key={product.id}>{product.name}</li>)
        )}
      </ul>
    </div>
  );
};

export default ProductList;
