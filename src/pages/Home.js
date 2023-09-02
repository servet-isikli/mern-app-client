import React from "react";
import ProductGet from "../components/ProductGet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
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
            <ProductGet />
          </Col>
        </Row>
        <Row>
          <Col sm={12}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
