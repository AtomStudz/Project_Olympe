// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// == Import react router
import { useParams } from 'react-router-dom';

// == Import
import './challenge.scss';

// == Import component
import Loader from 'src/components/Loader';
import Footer from 'src/components/Footer';

// == Import images
import flammes from 'src/assets/images/inscriptionconnexion.png';
import challenges from 'src/assets/images/challenges.png';

// == Component
const Challenge = ({
  challenge,
  loadChallenge,
  loading,
  // handleChallenge,
}) => {
  // console.log(challenge.id);

  const API_URL_PARTICIPATE = 'http://ec2-3-87-212-248.compute-1.amazonaws.com/apo-Olympe-back/public/api/participate/add';
  const token = localStorage.getItem('token');
  const handleChallenge = () => {
    axios.post(`${API_URL_PARTICIPATE}/${challenge.id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        // console.log('response: ', response);
      })
      .catch(() => {
        // console.log('ça ne fonctionne pas:', error);
      });
  };

  const { slug } = useParams();
  useEffect(() => {
    loadChallenge(slug);
    window.scrollTo(0, 0);
  }, []);

  return (
    <> {/* Challenge container */}
      {loading && <Loader />}
      {!loading && (
        <>
          <div className="challenge-page">
            <div className="challenge-category">
              <img src={challenge.category.icon} alt={challenge.category.name} />
              <div className="challenge-category-title">Défi&nbsp;{challenge.category.name}</div>
            </div>
            <div className="challenge-title">
              <img src={flammes} alt="défi" className="defi-flamme" />
              {challenge.title}
              <img src={flammes} alt="défi" className="defi-flamme" />
            </div>
            <div className="challenge">
              <div className="challenge-content">
                <div className="challenge-image-content">
                  <img src={challenge.image} alt={challenge.title} className="challenge-image" />
                </div>
                <div className="challenge-description">
                  <p className="challenge-description-info">{challenge.description}</p>
                </div>
              </div>
              <div className="challenge-info">
                <div className="tasks-info-title">Liste des tâches</div>
                <div className="tasks-info">{challenge.tasks}</div>
                <div className="cat-diff-content">
                  <div className="diff-content">
                    <img src={challenge.difficulty.icon} alt={challenge.difficulty.name} className="difficulty-info" />
                    <p className="diff-content-title">{challenge.difficulty.name}</p>
                  </div>
                  <div className="participate-content" onClick={handleChallenge} >
                    <img src={challenges} alt="participer" className="difficulty-info" />
                    <p className="participate-title">Je participe </p>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

Challenge.propTypes = {
  loadChallenge: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  // id: PropTypes.number.isRequired,
  challenge: PropTypes.shape({
    // id: PropTypes.number.isRequired,
    // title: PropTypes.string.isRequired,
    // description: PropTypes.string.isRequired,
    // image: PropTypes.string.isRequired,
    // tasks: PropTypes.string.isRequired,
    category: PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }),
    difficulty: PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      icon: PropTypes.string.isRequired,
    }),
  }).isRequired,
  // handleChallenge: PropTypes.func.isRequired,
};

export default Challenge;
