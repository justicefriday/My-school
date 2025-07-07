import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar mb-3">
      <div className="container">
        <Link className="navbar-brand text-white fw-bold" to="/">MySchool</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/students">Students</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/add-student">Add Student</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-warning ms-3" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
