import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center vh-100 bg-light">
      <img
        src="https://cdn.pixabay.com/photo/2017/01/10/19/05/page-not-found-1965446_1280.png"
        alt="404 Error"
        className="img-fluid mb-4"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <h1 className="display-4 fw-bold text-danger">Oops! Page Not Found</h1>
      <p className="lead text-muted">
        Sorry, the page you are looking for doesn’t exist, or it might have been removed.
      </p>
      <p className="mb-4">
        Use the navigation bar or click the button below to explore our site.
      </p>
      <Link to="/" className="btn btn-primary btn-lg">
        Back to Home
      </Link>
      <div className="mt-4">
        <Link to="/shop" className="btn btn-outline-secondary me-2">
          Visit Shop
        </Link>
        <Link to="/contact" className="btn btn-outline-secondary">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
