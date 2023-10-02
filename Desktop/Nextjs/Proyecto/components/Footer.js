// Importa React desde 'react' (esto podría no ser necesario en Next.js)
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer2">
        <div className="footer-container">
          <div className="footer-item"><a href="#">About Us</a></div>
          <div className="footer-item"><a href="#">Contact Us</a></div>
          <div className="footer-item"><a href="#">Sourcing Our Content</a></div>
          <div className="footer-item"><a href="#">Privacy Policy</a></div>
          <div className="footer-item"><a href="#">Terms and Conditions</a></div>
        </div>
        <div className="footer-affiliate">
          <p>As an Amazon Associate I earn from qualifying purchases.</p>
          <a href="#">Learn more about us & read our affiliate disclosure.</a>
        </div>
      </div>
      <div className="footer-content">
        <div className="social-icons">
          <img src="https://a-z-animals.com/wp-content/themes/aza-next/assets/images/social-icons/twitter-icon2.png" alt="Twitter" />
          <img src="https://a-z-animals.com/wp-content/themes/aza-next/assets/images/social-icons/rss-icon2.png"alt="RSS" />
          <img src="https://a-z-animals.com/wp-content/themes/aza-next/assets/images/social-icons/facebook-icon2.png"alt="Facebook" />
        </div>
        <p className="copyright">&copy; 2008 - 2023 A-Z Animals</p>
      </div>
    </footer>
  );
};

export default Footer;
