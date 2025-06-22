import React from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from './backend/Products.json';
import './Products.css';

function ProductDetail() {
  const { id } = useParams();
  const product = productsData.find(p => String(p.id) === id);

  if (!product) {
    return (
      <div className="products-container">
        <h2 className="products-title">Product not found</h2>
        <Link to="/products" className="view-btn">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="products-container">
      <h2 className="products-title">{product.name}</h2>
      <p style={{ marginBottom: '20px' }}>{product.description}</p>
      <Link to="/products" className="view-btn">Back to Products</Link>
    </div>
  );
}

export default ProductDetail;
