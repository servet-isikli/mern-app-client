import React, { useState, useEffect } from "react";
import { useProductContext } from "../contexts/ProductContext";
import { useParams, Link,  } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";

const ProductDelete = () => {
  const { productId } = useParams();
  const { products, deleteProduct } = useProductContext();
  const [product, setProduct] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    const foundProduct = products.find((product) => product._id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [productId, products]);

  const handleDelete = () => {
    deleteProduct(productId)
      .then(() => {
        setIsDeleted(true);
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  return (
    <div>
      {product ? (
        <Card>
          <Card.Img variant="top" src={product.imageSrc} alt={product.name} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>Price: ${product.price}</Card.Text>
            {isDeleted ? (
              <Alert variant="success">Product deleted successfully</Alert>
            ) : (
              <div>
                <Button variant="danger" onClick={handleDelete}>
                  Delete Product
                </Button>
                <Link to={`/update/${productId}`}>
                  <Button variant="primary">Edit Product</Button>
                </Link>
              </div>
            )}
          </Card.Body>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDelete;
