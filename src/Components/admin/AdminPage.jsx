import React, { useState } from 'react';

function AdminPage() {
  const [productName, setProductName] = useState('');

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const newProduct = { name: productName };

    try {
      const response = await fetch('http://localhost:5050/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct),
      });
      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        setProductName('');
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Admin Panel</h2>
      <form onSubmit={handleAddProduct}>
        <div className="mb-3">
          <label>Product Name</label>
          <input
            type="text"
            className="form-control"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">Add Product</button>
      </form>
    </div>
  );
}

export default AdminPage;
