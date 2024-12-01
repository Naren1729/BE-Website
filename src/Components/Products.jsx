import React from "react";
import { Link } from "react-router-dom";
import UserForm from "./UserForm";

function Products() {
    const products = [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
        { id: 3, name: "Product 3" },
        // Add more products as needed
    ];

    return (
        <div className="container mt-5">
            <h2>Products</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">S.no</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>
                                <Link to={`/products/${product.id}`} className="btn btn-dark btn-sm me-2">
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
