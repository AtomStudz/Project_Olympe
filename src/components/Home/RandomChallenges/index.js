// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import images

// == Import
import './randomchallenges.scss';

// == Component
const RandomChallenges = ({ title, difficulty, category }) => (
  <div className="one-random-challenge">
    <div className="one-random-challenge-title">
      {title}
    </div>
    <div className="one-random-challenge-extra">
      <div className="random-challenge-category">
        <img src={category.icon} alt={category.name} />
      </div>
      <div className="random-challenge-category">
        <img src={difficulty.icon} alt={difficulty.name} />
      </div>
    </div>
  </div>
);

// == PropTypes validation
RandomChallenges.propTypes = {
  title: PropTypes.string.isRequired,
  /* difficulty: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  category: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired, */
};
// == Export
export default RandomChallenges;
