import React from 'react';
import logo from '../images/logo/skyfall.svg';

export default function Banner() {
  return (
    <footer id="footer" className="footer py-3">
      <div className="container text-center">
        <div className="img-logo mb-4">
          <img src={logo} width="100" height="100" alt="Skyfall Technologies" />
        </div>
        <div className="copyright text-uppercase">
          © {new Date().getFullYear()} Skyfall Technologies
        </div>
      </div>
    </footer>
  );
}