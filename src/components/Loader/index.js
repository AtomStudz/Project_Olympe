// == Import npm
import React from 'react';

// == Import
import './loader.scss';

// == Import Images
import firstLogo from 'src/assets/images/logo1.png';

// == Component
const Loader = () => (
  <div className="loader-content">
    <div className="loader">
      <img src={firstLogo} alt="logo-olympe" className="loader-img" />
    </div>
  </div>
);

export default Loader;
