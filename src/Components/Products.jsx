import React from "react";
import { Link } from "react-router-dom";
import UserForm from "./UserForm";
import "./Products.css"; // Add a separate CSS file for better styling control

function Products() {
    const products = [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
        { id: 3, name: "Product 3" },
        // Add more products as needed
    ];

    return (
        <div className="products-container">
            <h2 className="products-title">Our Products</h2>
            <table className="products-table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Product Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>
                                <Link to={`/products/${product.id}`} className="view-btn">
                                    View
                                </Link>
                                <UserForm />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Products;
