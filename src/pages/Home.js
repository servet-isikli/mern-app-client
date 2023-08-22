import React from "react";
import ProductList from "../components/ProductList";
import { useProductListContext } from "../contexts/ProductListContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  const products = useProductListContext();

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
            <ProductList products={products} />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
