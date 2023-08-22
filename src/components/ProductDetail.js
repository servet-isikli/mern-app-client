import React from "react";
import { useProductContext } from "../contexts/ProductContext";
import { Card, Button } from "react-bootstrap";

const ProductDetail = () => {
  const products = useProductContext();

  // Örnek olarak ilk ürünü seçiyoruz, istediğiniz şekilde ürünü seçebilirsiniz
  const product = products[0];

  return (
    <div>
      <h2>Product Detail</h2>
      <Card>
        <Card.Img variant="top" src={product.imageSrc} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>Price: {product.price}</Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetail;
