// src/components/Navbar.jsx
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar-logo">
        <h1>Fruity</h1>
      </div>
      <div className="Navbar-middle">
        <a href="#">Shop</a>
        <a href="#">About</a>
        <a href="#">Careers</a>
        <a href="#">Partnership</a>
        <a href="#">Contact</a>
      </div>
      <div className="Navbar-right">
        <a href="#">My Cart</a>
        <a href="#">Register</a>
      </div>
    </div>
  );
}
