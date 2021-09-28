// == Import npm
import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import Images
import logo from 'src/assets/images/cyrielle.png';

// == Import component
import Footer from 'src/components/Footer';

// == import
import './subscribe.scss';

// == Component
const Subscribe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="subscribe-content">
        <div className="subscribe-container">
          <img src={logo} alt="" className="logo" />
          <h2>Tout commence par ton inscription</h2>
          <p>
            Créés ton compte pour participer aux défis et les ajouter à ton tableau de bord
          </p>
        </div>
        <div className="subscribe-form-content">
          <form action="" method="get" className="subscribe-form-container">
            <label htmlFor="firstname" className="field-label">
              Prénom
              <input type="text" name="firstname" placeholder="Ton prénom" className="field-input" />
            </label>
            <label htmlFor="lastname" className="field-label">
              Nom
              <input type="text" name="lastname" placeholder="Ton nom" className="field-input" />
            </label>
            <label htmlFor="nickname" className="field-label">
              Pseudo
              <input type="text" name="nickname" placeholder="Ton pseudo" className="field-input" />
            </label>
            <label htmlFor="email" className="field-label">
              Adresse e-mail
              <input type="email" name="email" placeholder="Ton email" className="field-input" />
            </label>
            <label htmlFor="email" className="field-label">
              Mot de passe
              <input type="password" name="password" placeholder="Mot de passe" className="field-input" />
            </label>
            <label htmlFor="password-confirmation" className="field-label">
              confirmation du mot de passe
              <input type="password" name="password-confirmation" placeholder="Confirmation du mot de passe" className="field-input" />
            </label>
            <Link to="/inscription-connexion">
              <button
                type="submit"
                className="register-button"
              >
                Direction l'Olympe !
              </button>
            </Link>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

// == Propstypes validation

// Subscribe.propTypes = {
// email: PropTypes.string.isRequired,
// password: PropTypes.string.isRequired,
// firstname: PropTypes.string.isRequired,
// lastname: PropTypes.string.isRequired,
// nickname: PropTypes.string.isRequired,
// };

// == Export
export default Subscribe;
