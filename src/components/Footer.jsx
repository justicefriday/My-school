import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white pt-5 pb-3" style={{ backgroundColor: '#56DFCF' }}>
  <div className="container">
    <div className="row g-4">
      {/* Left Column */}
      <div className="col-md-4 px-md-4">
        <h4 className="fw-bold">School Name</h4>
        <p><FaMapMarkerAlt className="me-2" /> 123 Main Street, Onda Village</p>
        <p><FaPhone className="me-2" /> +234 812 345 6789</p>
        <p><FaEnvelope className="me-2" /> info@schoolname.com</p>
      </div>

      {/* Center Column */}
      <div className="col-md-4 px-md-4">
        <h5 className="fw-bold">Newsletter</h5>
        <p>Subscribe to get updates about our students and events.</p>
        <form>
          <div className="input-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              required
            />
            <button
              type="submit"
              className="btn text-white"
              style={{ backgroundColor: '#FFC107' }}
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

      {/* Right Column */}
      <div className="col-md-4 px-md-4">
        <h5 className="fw-bold">Quick Links</h5>
        <ul className="list-unstyled">
          <li><a href="/" className="text-white text-decoration-none">Home</a></li>
          <li><a href="/students" className="text-white text-decoration-none">Students</a></li>
          <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
          <li><a href="/about" className="text-white text-decoration-none">About</a></li>
        </ul>
        <div className="mt-3 d-flex gap-3">
          <a href="#"><FaFacebookF className="text-white" /></a>
          <a href="#"><FaInstagram className="text-white" /></a>
          <a href="#"><FaTwitter className="text-white" /></a>
          <a href="#"><FaLinkedin className="text-white" /></a>
        </div>
      </div>
    </div>

    {/* Bottom */}
    <hr style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
    <p className="text-center mb-0">
      &copy; {new Date().getFullYear()} School Name. All rights reserved.
    </p>
  </div>
</footer>

  );
};

export default Footer;
