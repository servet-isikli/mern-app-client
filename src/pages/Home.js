import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products") // API isteği yapılıyor
      .then((response) => response.json()) // Gelen veriyi JSON olarak çözümleniyor
      .then((data) => setProducts(data)) // Ürünleri state'e ayarlanıyor
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
