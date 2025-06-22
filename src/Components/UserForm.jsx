import React, { useState } from "react";
import "./UserForm.css"; // Import CSS for styling the form

function UserForm() {
    const [form, setForm] = useState({ name: '', email: '', contact: '', company: '', quantity: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:5050/api/enquiries', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        });
    };

    return (
        <>
            <button
                type="button"
                className="enquiry-btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
            >
                Enquiry Form
            </button>
            <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">
                                Enquiry Form
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="form-control"
                                        placeholder="Enter your name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email ID</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact">Contact Number</label>
                                    <input
                                        type="tel"
                                        id="contact"
                                        className="form-control"
                                        placeholder="Enter your contact number"
                                        value={form.contact}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input
                                        type="text"
                                        id="company"
                                        className="form-control"
                                        placeholder="Enter your company name"
                                        value={form.company}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="quantity">Quantity</label>
                                    <input
                                        type="number"
                                        id="quantity"
                                        className="form-control"
                                        placeholder="Enter quantity"
                                        value={form.quantity}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="close-btn" data-bs-dismiss="modal">
                                        Close
                                    </button>
                                    <button type="submit" className="submit-btn">
                                        Submit Enquiry
                                    </button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default UserForm;
