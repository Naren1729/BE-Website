import React, { useState, useEffect } from 'react';

function AdminPage() {
  const [productName, setProductName] = useState('');
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5050/api/enquiries')
      .then(res => res.json())
      .then(setEnquiries)
      .catch(() => setEnquiries([]));
  }, []);

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
      {enquiries.length > 0 && (
        <div className="mt-4">
          <h4>Enquiries</h4>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Company</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map(enq => (
                <tr key={enq.id}>
                  <td>{enq.name}</td>
                  <td>{enq.email}</td>
                  <td>{enq.contact}</td>
                  <td>{enq.company}</td>
                  <td>{enq.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AdminPage;
