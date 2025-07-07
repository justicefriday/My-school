import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center px-4 py-5 shadow rounded bg-white" style={{ maxWidth: '500px' }}>
        {/* Warning Icon */}
        <div
          className="d-inline-flex align-items-center justify-content-center mb-4 rounded-circle"
          style={{
            width: '80px',
            height: '80px',
            backgroundColor: '#FFC107',
            color: '#fff',
            fontSize: '36px',
          }}
        >
          <FaExclamationTriangle />
        </div>

        {/* 404 Title */}
        <h1 className="display-3 fw-bold text-danger mb-2">404</h1>

        {/* Message */}
        <p className="fs-5 fw-semibold text-secondary">
          <span className="text-danger">Oops!</span> We couldn't find that page.
        </p>

        <p className="text-muted mb-4">
          The page you’re looking for might have been moved, renamed, or doesn’t exist.
        </p>

        {/* Back Home Button */}
        <Link to="/" className="btn px-4 py-2" style={{ backgroundColor: '#03A6A1', color: '#fff' }}>
          ← Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
