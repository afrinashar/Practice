import  { useState } from "react";
import "./Navbar.css";

const Navbar  = () => {
  const [navbarType, setNavbarType] = useState("horizontal");

  const handleNavbarChange = (event) => {
    setNavbarType(event.target.value);
  };

  return (
    <div className="navbar- ">
      <h1>Navbar Styles  </h1>

      <div className="controls">
        <label htmlFor="navbar-type">Select Navbar Type:</label>
        <select
          id="navbar-type"
          value={navbarType}
          onChange={handleNavbarChange}
        >
          <option value="horizontal">Horizontal Navbar</option>
          <option value="sidebar">Vertical Sidebar Navbar</option>
          <option value="fixed">Fixed Top Navbar</option>
          <option value="sticky">Sticky Navbar</option>
          <option value="responsive">Responsive Navbar</option>
        </select>
      </div>

      <div className={`navbar-container ${navbarType}`}>
        <nav className={`navbar ${navbarType}`}>
          <a href="#" className="navbar-logo">Logo</a>
          <ul className="navbar-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          {navbarType === "responsive" && (
            <button className="navbar-toggle">
              <span>&#9776;</span>
            </button>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar ;
