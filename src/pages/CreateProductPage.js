import React from "react";
import ProductCreate from "../components/ProductCreate";
import { useProductContext } from "../contexts/ProductContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CreateProductPage = () => {
  const { createProduct } = useProductContext();

  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} className="text-center">
            <h1>E-Commerce</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <ProductCreate createProduct={createProduct} />
          </Col>
        </Row>
        <Row>
          <Col sm={12}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreateProductPage;
