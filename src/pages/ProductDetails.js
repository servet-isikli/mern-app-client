import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // API isteği ile ürünü al ve setProduct ile ayarla
    fetch(`/api/products/${id}`) // API isteği yapılıyor (örneğin /api/products/123 gibi)
      .then((response) => response.json()) // Gelen veriyi JSON olarak çözümleniyor
      .then((data) => setProduct(data)) // Ürünü state'e ayarlanıyor
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductDetails;
