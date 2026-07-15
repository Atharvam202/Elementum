import "./Footer.css";
import purpleShape from "../assets/purple-shape.png";
import redarrow from "../assets/redarrow.png";

function Footer() {
  return (
    <footer className="Footer">

      <img src={purpleShape} className="footer-purple" alt="" />
      <img src={redarrow} className="redarrow" alt="" />

      <div className="footer-top">

        <h1>
          Subscribe to <br />
          our newsletter
        </h1>

        <p>
          To make your stay special and even more memorable
        </p>

        <button>Subscribe Now</button>

      </div>

      <div className="footer-divider"></div>

      <div className="footer-links">

        <div>
          <h3>Company</h3>

          <a href="#">Home</a>
          <a href="#">Studio</a>
          <a href="#">Service</a>
          <a href="#">Blog</a>
        </div>

        <div>
          <h3>Terms & Policies</h3>

          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Explore</a>
          <a href="#">Accessibility</a>
        </div>

        <div>
          <h3>Follow Us</h3>

          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Youtube</a>
          <a href="#">Twitter</a>
        </div>

        <div>
          <h3>Contact</h3>

          <p>1498 W Fulton St, STE</p>
          <p>2D Chicago, IL 63867.</p>

          <p>(123) 456-789000</p>

          <p>info@elementum.com</p>
        </div>

      </div>

      <p className="copyright">
        ©2023 Elementum. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;