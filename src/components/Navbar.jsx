import "./Home.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <h2>Elementum</h2>
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Studio</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">FAQs</a></li>
      </ul>

      <div className="menu">
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Navbar;