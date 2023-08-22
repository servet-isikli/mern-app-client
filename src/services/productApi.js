// services/api.js
const API_URL = "/api/products";

const getProducts = () => {
  return fetch(API_URL)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching products:", error);
      throw error;
    });
};

const createProduct = (productData) => {
  return fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error creating product:", error);
      throw error;
    });
};

const updateProduct = (productId, productData) => {
  return fetch(`${API_URL}/${productId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error updating product:", error);
      throw error;
    });
};

const deleteProduct = (productId) => {
  return fetch(`${API_URL}/${productId}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error deleting product:", error);
      throw error;
    });
};

export { getProducts, createProduct, updateProduct, deleteProduct };
