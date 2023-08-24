import React, { useState, useEffect } from "react";
import { useProductContext } from "../contexts/ProductContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const UpdateProduct = ({ productId }) => {
  const { products, updateProduct } = useProductContext();

  const initialFormData = {
    name: "",
    description: "",
    price: "",
    imageSrc: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    const productToUpdate = products.find(
      (product) => product._id === productId
    );
    if (productToUpdate) {
      setFormData(productToUpdate);
    }
  }, [productId, products]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(productId, formData)
      .then(() => {
        // Başarılı güncelleme sonrası işlemler
      })
      .catch((error) => {
        // Hata durumlarında işlemler
        console.error("Error updating product:", error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="imageSrc">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          name="imageSrc"
          value={formData.imageSrc}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Update Product
      </Button>
    </Form>
  );
};

export default UpdateProduct;
