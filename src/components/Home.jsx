import React from 'react';
import { Link } from 'react-router-dom'; 

const Homepage = () => {
  const heroStyle = {
    backgroundColor: '#03A6A1',
    color: 'white',
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    padding: '60px 20px'
  };

  const btnStyle = {
    backgroundColor: '#FFC107',
    color: '#000',
    border: 'none',
    padding: '12px 30px',
    fontSize: '1.1rem',
    fontWeight: 'bold'
  };

  return (
    <section style={heroStyle}>
      <div className="container mt-3">
        <h1 className="display-4 fw-bold">Welcome to MySchool</h1>
        <p className="lead">At MySchool, we are dedicated to empowering students through a blend of high-quality education, individualized support,
          and a nurturing environment that fosters growth, confidence, and lifelong success.</p>
        
        <Link to="/students" className="btn mt-3" style={btnStyle}>
          View All Students
        </Link>
      </div>
    </section>
  );
};

export default Homepage;
