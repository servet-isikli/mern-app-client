import React from "react";
import ProductForm from "../components/ProductForm";

const AddProduct = () => {
  const handleSubmit = async (product) => {
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        // Başarılı ekleme sonrası yönlendirme veya başka işlemler yapılabilir
      } else {
        console.error("Error adding product:", response.status);
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div>
      <h1>Add Product</h1>
      <ProductForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddProduct;
