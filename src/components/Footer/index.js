// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './footer.scss';

// == Import images
import instaIcon from 'src/assets/images/instagram.png';
import twitterIcon from 'src/assets/images/twitter.png';
import thunder from 'src/assets/images/eclair.png';

// == Component
const Footer = () => (
  <div className="footer">
    <nav className="footer-nav">
      <div><Link to="/lesolympiens" className="nav-item">équipe</Link></div>
      <div><Link to="/contact" className="nav-item">contact</Link></div>
      <div> <Link to="/mentionslégales" className="nav-item">mentions&nbsp;légales</Link></div>
    </nav>
    <div className="nav-icon-section">
      <img src={instaIcon} alt="instagram" className="nav-icon" />
      <img src={twitterIcon} alt="twitter" className="nav-icon" />
      <div className="rights">
        <div className="rights-oz">
          made with&nbsp;<img src={thunder} alt="éclair" />by promo Oz
        </div>
        <div className="rights-flaticon">
          icones : flaticon
        </div>
      </div>
    </div>
  </div>
);

// == Export
export default Footer;
