import React from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UpdateProduct from "../components/UpdateProduct";

const UpdateProductPage = () => {
  const { productId } = useParams();

  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} className="text-center">
            <h1>Update Product</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <UpdateProduct productId={productId} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UpdateProductPage;
