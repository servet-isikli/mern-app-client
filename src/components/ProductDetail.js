import React from "react";
import { useProductListContext } from "../contexts/ProductListContext";

const ProductDetail = () => {
  const products = useProductListContext();

  // Örnek olarak ilk ürünü seçiyoruz, istediğiniz şekilde ürünü seçebilirsiniz
  const product = products[0];

  return (
    <div>
      <h2>Product Detail</h2>
      <p>Name: {product.name}</p>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default ProductDetail;
