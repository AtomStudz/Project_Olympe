// == Import npm
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// == Import
import './login.scss';

// == Import component
import LoginForm from 'src/containers/LoginForm';
import Footer from 'src/components/Footer';

// == Component
const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="subscribe-login">
      <div className="login-container">
        <div className="subscribe">
          <h2>Inscription</h2>
          <p>
            Créés ton compte pour participer aux défis et les ajouter à ton tableau de bord
          </p>
          <Link to="/inscription">
            <button type="button" className="subscribe-button">
              Créer mon compte
            </button>
          </Link>
        </div>
        <div className="login">
          <h2>Connexion</h2>
          <p>Connectes toi pour participer aux défis et accéder à ton tableau de bord</p>
          <LoginForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

// == Export
export default Login;
