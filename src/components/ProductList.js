import React from "react";
import { useProductListContext } from "../contexts/ProductListContext";
import { Card, Button, Col } from "react-bootstrap"; // Bootstrap bileşenlerini içe aktarın

const ProductList = () => {
  const products = useProductListContext();

  return (
    <div>
      <h2>Product List</h2>
      <div className="row">
        {products === "loading" ? (
          <p>Loading...</p>
        ) : (
          products.map((product) => (
            <Col key={product.id} xs={6} md={4} lg={3} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={product.imageSrc}
                  alt={product.name}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>Price: {product.price}</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
