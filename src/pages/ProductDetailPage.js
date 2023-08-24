import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductDetail from "../components/ProductDetail";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { productId } = useParams(); // Kullanilmayabilir

  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} className="text-center">
            <h1>Product Detail</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <ProductDetail productId={productId} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetailPage;
