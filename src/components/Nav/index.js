// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import Router
import { Link } from 'react-router-dom';

// == Import
import './nav.scss';

// == Import images
import firstLogo from 'src/assets/images/logo1.png';
import challenges from 'src/assets/images/challenges.png';
import inscriptionconnexion from 'src/assets/images/inscriptionconnexion.png';
import dashboard from 'src/assets/images/dashboard.png';
// import profil from 'src/assets/images/profil.png';

// == Import fonctionality react-menu-burger : https://www.npmjs.com/package/react-burger-menu
import { slide as Menu } from 'react-burger-menu';

// == Component
const Nav = ({
  user,
  handleLogout,
  loading,
  loadUserProfil,
  userProfil,
}) => {
/*
* <Link to="/monprofil" className="nav-item"><img src={profil} alt="mon profil"
className="menu-logo" />&nbsp;mon&nbsp;profil</Link>
*/

  useEffect(() => {
    loadUserProfil();
  }, []);

  // console.log(userProfil.nickname);
  // if (userProfil.nickname !== undefined) {
  //   console.log('non connecté');
  // }
  // else {
  //   console.log('connecté');
  // }

  return (
    <>
      {user && (
        <>
          <div className="Nav">
            <nav className="navigation">
              <Link to="/" className="nav-item"><img src={firstLogo} alt="logo-olympe" className="nav-logo" />
                accueil
              </Link>
              <h2 className="nav-item">menu</h2>
            </nav>
            <Menu right className="menu">
              {!loading && userProfil.nickname !== undefined && (
                <div className="userProfil">
                  Bonjour&nbsp;&nbsp;{userProfil.nickname}
                </div>
              )}
              <Link to="/defis" className="nav-item"><img src={challenges} alt="les challenges" className="menu-logo" />&nbsp;les défis</Link>
              <Link to="/tableaudebord" className="nav-item"><img src={dashboard} alt="tableau de bord" className="menu-logo" />&nbsp;tableau&nbsp;de&nbsp;bord</Link>
              <Link to="/">
                <button
                  type="button"
                  className="logout-button"
                  onClick={handleLogout}
                >
                  me&nbsp;déconnecter
                </button>
              </Link>
            </Menu>
          </div>
        </>
      )}
      {!user && (
      <>
        <div className="Nav">
          <nav className="navigation">
            <Link to="/" className="nav-item"><img src={firstLogo} alt="firstLogo" className="nav-logo" />
              Accueil
            </Link>
            <h2 className="nav-item">menu</h2>
          </nav>
          <Menu right className="menu">
            <Link to="/defis" className="nav-item"><img src={challenges} alt="les challenges" className="menu-logo" />&nbsp;les&nbsp;défis</Link>
            <Link to="/inscription-connexion" className="nav-item"><img src={inscriptionconnexion} alt="inscription et connexion" className="menu-logo" />&nbsp;inscription & connexion</Link>
          </Menu>
        </div>
      </>
      )}
    </>
  );
};

Nav.propTypes = {
  userProfil: PropTypes.object.isRequired,
  handleLogout: PropTypes.func.isRequired,
  loadUserProfil: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  user: PropTypes.bool.isRequired,
};

// == Export
export default Nav;
