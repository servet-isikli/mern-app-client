import React, { useState } from "react";
import { useProductContext } from "../contexts/ProductContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CreateProduct = () => {
  const { createProduct } = useProductContext();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    imageSrc: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(formData)
      .then(() => {
        // Handle success or any other action
      })
      .catch((error) => {
        // Handle error
        console.error("Error creating product:", error);
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
        Create Product
      </Button>
    </Form>
  );
};

export default CreateProduct;
