// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// == Import Component
import Field from './Field';

// == Import
import './login.scss';

// == Component
const LoginForm = ({
  email,
  password,
  changeField,
  handleLogin,
  user,
  loadUserProfil,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
    loadUserProfil();
  };

  /*
  *
  * The password and email are required
  * If the user is logged
  * the field will also be automaticly reset thanks to authReducer
  * and the user will be redirect automaticly to his dashboard to see his own challenges
  * Else the form is still here and waiting for good informations
  *
  */

  return (
    <div className="login-form">
      {user && (
        <Redirect from="/inscription-connexion" to="/tableaudebord" />
      )}
      {!user && (
        <form className="login-form-element" onSubmit={handleSubmit}>
          <Field
            name="email"
            placeholder="Adresse Email "
            manageChange={changeField}
            value={email}
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe "
            manageChange={changeField}
            value={password}
          />
          <button
            type="submit"
            className="login-button"
          >
            Me connecter
          </button>
        </form>
      )}
    </div>
  );
};

// == Propstypes validation

LoginForm.propTypes = {
  /** value for the email */
  email: PropTypes.string.isRequired,
  /** value for the password */
  password: PropTypes.string.isRequired,
  /** called when onChange event is received by an input, two parameters :
   * - new value
   * - name
   */
  changeField: PropTypes.func.isRequired,
  /** called when the form is submitted */
  handleLogin: PropTypes.func.isRequired,
  loadUserProfil: PropTypes.func.isRequired,
  /** toggle between "connected" or "not connected" */
  user: PropTypes.bool.isRequired,
};

// == Export
export default LoginForm;
