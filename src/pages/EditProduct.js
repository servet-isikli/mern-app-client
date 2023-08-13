import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // API isteği ile ürünü al ve setProduct ile ayarla
    fetch(`/api/products/${id}`) // API isteği yapılıyor (örneğin /api/products/123 gibi)
      .then((response) => response.json()) // Gelen veriyi JSON olarak çözümleniyor
      .then((data) => setProduct(data)) // Ürünü state'e ayarlanıyor
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const handleSubmit = (updatedProduct) => {
    // API isteği ile ürünü güncelle
    fetch(`/api/products/${id}`, {
      method: "PUT", // Güncelleme işlemi için PUT metodu kullanılıyor
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        // Başarılı güncelleme sonrası yönlendirme veya başka işlemler yapılabilir
      })
      .catch((error) => console.error("Error updating product:", error));
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Product</h1>
      <ProductForm onSubmit={handleSubmit} />
    </div>
  );
};

export default EditProduct;
