import React, { createContext, useState, useEffect, useContext } from "react";

const ProductListContext = createContext();

export const useProductListContext = () => {
  return useContext(ProductListContext);
};

export const ProductListProvider = ({ children }) => {
  const [products, setProducts] = useState("loading");

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <ProductListContext.Provider value={products}>
      {children}
    </ProductListContext.Provider>
  );
};
