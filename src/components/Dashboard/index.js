// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import axios from 'axios';

// == Import
import './dashboard.scss';

// == Import Images
import dashboardLogo from 'src/assets/images/dashboard.png';
import zeus from 'src/assets/images/zeus.png';
// import finishChallenge from 'src/assets/images/zeus_1.png';

// == Import components
import Footer from 'src/components/Footer';
import Loader from 'src/components/Loader';

// == Component
const Dashboard = ({
  loadParticipates,
  participates,
  loading,
  loadUserProfil,
  userProfil,
}) => {
  useEffect(() => {
    loadParticipates();
    window.scrollTo(0, 0);
    loadUserProfil();
  }, []);

  // const API_URL_PARTICIPATE_EDIT = 'http://ec2-3-87-212-248.compute-1.amazonaws.com/apo-Olympe-back/public/api/participate';
  //
  // const token = localStorage.getItem('token');
  // const editParticipate = () => {
  //   axios.post(`${API_URL_PARTICIPATE_EDIT}/${participates.participate}/edit`,
  //     {},
  //     {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => {
  //       console.log('response: ', response);
  //     })
  //     .catch((error) => {
  //       console.log('ça ne fonctionne pas:', error);
  //     });
  // };

  return (
    <>
      <div className="dashboard">
        {loading ? <Loader /> : (
          <div className="dashboard-container">
            <div className="dashboard-top">
              <div className="dashboard-content">
                <h2 className="dashboard-welcome">Bienvenue {userProfil.nickname} sur ton tableau de bord </h2>
              </div>
            </div>
            <div className="dashboard-bottom">
              {participates.length ? (
                <>
                  <div className="bottom-title">
                    <h2>
                      <img src={dashboardLogo} alt="dashboardlogo" className="bottom-logo-left" />
                      Tes défis en cours : {participates.length}
                      <img src={dashboardLogo} alt="dashboardlogo" className="bottom-logo-right" />
                    </h2>
                  </div>
                  <div className="participates-list">
                    {participates.map((participate) => (
                      <div className="participate-content" key={participate.id}>
                        <div className="participate-challenge">
                          <img
                            src={participate.challenge.image}
                            alt={participate.challenge.title}
                            className="participate-image"
                          />
                          <h2 className="user-participate">{participate.challenge.title}</h2>
                          <p className="participate-description">{participate.challenge.description}</p>
                          <div>
                            <p className="participate-tasks">Liste des tâches</p>
                            <p className="participate-description">{participate.challenge.tasks}</p>
                          </div>
                          <div className="participate-cat-diff">
                            <img
                              src={participate.challenge.category.icon}
                              alt={participate.challenge.category.name}
                              className="participate-challenge-category"
                            />
                            <img
                              src={participate.challenge.difficulty.icon}
                              alt={participate.challenge.difficulty.name}
                              className="participate-challenge-difficulty"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="participate-empty">
                    <img src={zeus} alt="zeus" className="zeus-logo" />
                    <h2 className="participate-empty-title">Que vois-je?</h2>
                    <div className="participate-empty-text">
                      Un tableau de bord bien vide.
                      Olympien, rejoins la page des défis afin d'y participer !
                    </div>
                    <Link to="/defis">
                      <button type="button" className="subscribe-button">
                        Nos défis Olympiens !
                      </button>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

Dashboard.propTypes = {
  // id: PropTypes.number.isRequired,
  loadParticipates: PropTypes.func.isRequired,
  // loadChallenge: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  userProfil: PropTypes.object.isRequired,
  loadUserProfil: PropTypes.func.isRequired,
  participates: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Dashboard;
