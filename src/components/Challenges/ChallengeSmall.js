// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';

// == Import
import './challenges.scss';

// == Import images
import openChallenge from 'src/assets/images/loupe.png';
import challengeParticipate from 'src/assets/images/challenges.png';

const ChallengeSmall = ({
  challengeId,
  slug,
  title,
  image,
  category,
  difficulty,
  user,
  handleParticipate,
  // participation,
}) => {
  // console.log(difficulty);

  const API_URL_PARTICIPATE = 'http://ec2-3-87-212-248.compute-1.amazonaws.com/apo-Olympe-back/public/api/participate/add';
  const token = localStorage.getItem('token');
  // console.log(challengeId);
  const handleChallenge = () => {
    axios.post(`${API_URL_PARTICIPATE}/${challengeId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log('response: ', response);
      })
      .catch((error) => {
        console.log('ça ne fonctionne pas:', error);
      });
    handleParticipate();
  };

  // console.log(participation);
  return (
    <>
      {user && (
      <>
        <div className="challenge-small">
          <Link to={`/defi/${slug}`}>
            <div className="open-challenge">
              <img src={openChallenge} alt="voir ce défi" className="open-image" />
              <p>en savoir plus</p>
            </div>
          </Link>
          <img src={image} alt={title} className="challenge-image" />
          <div className="challenge-small-infos">
            <div className="challenge-small-content">
              <h2>{title}</h2>
              <div className="category-difficulty">
                <img src={category.icon} alt={category.name} className="challenge-small-category" />
                <p>&nbsp;{category.name}&nbsp;-&nbsp;{difficulty.name} </p>
                <img src={difficulty.icon} alt={difficulty.name} className="challenge-small-difficulty" />
              </div>
            </div>
            <div className="participate" onClick={handleChallenge}>
              <img src={challengeParticipate} alt="participer" className="challenge-participate" />
              <p>je participe !</p>
            </div>
          </div>
        </div>
      </>
      )}
      {!user && (
      <>
        <div className="challenge-small">
          <div>
            <Link to="/inscription-connexion">
              <div className="open-challenge">
                <img src={openChallenge} alt="voir ce défi" className="open-image" />
                <p>en savoir plus</p>
              </div>
            </Link>
          </div>
          <img src={image} alt={title} className="challenge-image" />
          <div className="challenge-small-infos">
            <div className="challenge-small-content">
              <h2>{title}</h2>
              <div className="category-difficulty">
                <img src={category.icon} alt={category.name} className="challenge-small-category" />
                <p>défi&nbsp;{category.name}</p>
                <img src={difficulty.icon} alt={difficulty.name} className="challenge-small-difficulty" />
              </div>
            </div>
          </div>
        </div>
      </>
      )}
    </>
  );
};

ChallengeSmall.propTypes = {
  challengeId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
  difficulty: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
  handleParticipate: PropTypes.func.isRequired,
  // participation: PropTypes.bool.isRequired,
};

export default ChallengeSmall;
