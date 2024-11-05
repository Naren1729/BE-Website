import React from "react";

function UserForm() {
    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Enquiry Form
            </button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Enquiry Form</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Your Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email Id</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="contact" className="form-label">Contact Number</label>
                                    <input type="tel" className="form-control" id="contact" placeholder="Enter your contact number" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="company" className="form-label">Company Name</label>
                                    <input type="text" className="form-control" id="company" placeholder="Enter your company name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="quantity" className="form-label">Quantity</label>
                                    <input type="number" className="form-control" id="quantity" placeholder="Enter quantity" required />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Submit Enquiry</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserForm;
