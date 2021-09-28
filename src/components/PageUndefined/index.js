// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './pageundefined.scss';

// == Import images
import errorNotfound from 'src/assets/images/notfound.png';

const PageUndefined = () => (
  <div className="undefined-page">
    <img src={errorNotfound} alt="erreur 404, page non trouvée" />
    <Link to="/">
      <button type="button">revenir à l'accueil</button>
    </Link>
  </div>
);

// == Export
export default PageUndefined;
