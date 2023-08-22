import React, { useEffect, useState } from "react";
import { useProductContext } from "../contexts/ProductContext";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { products } = useProductContext();
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = products.find((p) => p.id === productId);
    setProduct(selectedProduct);
  }, [productId, products]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <img src={product.imageSrc} alt={product.name} />
    </div>
  );
};

export default ProductDetail;
