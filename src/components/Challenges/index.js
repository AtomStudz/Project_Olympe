// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import './challenges.scss';

// == Import Images
import olympeChallenges from 'src/assets/images/lesdéfis.png';
import nbCategory from 'src/assets/images/nbcatégories.png';
import nbDifficulty from 'src/assets/images/nbdifficultés.png';

// == import data categories (optional if we have time)
import categories from 'src/data/categories';

// == Import data difficulties (V1)
import difficulties from 'src/data/difficulties';

// == Import components
import Loader from 'src/components/Loader';
import ChallengeSmall from 'src/containers/Challenges/ChallengeSmall';
import Footer from 'src/components/Footer';

// == Import images
import redirection from 'src/assets/images/redirection.png';
import smoke from 'src/assets/images/smoke.png';

// == Component
const Challenges = ({
  loadChallenges,
  loading,
  challenges,
  participation,
  handleValidateParticipation,
}) => {
  useEffect(() => {
    loadChallenges();
    window.scrollTo(0, 0);
  }, []);

  // console.log(participation);

  return (
    <div className="challenges">
      {participation && (
        <div className="message-participate-container">
          <div className="message-participate">
            <button type="button" onClick={handleValidateParticipation}>
              here we go !
            </button>
            <div>
              <img src={smoke} alt="redirection" className="smoke-icon" />
              <img src={redirection} alt="redirection" />
            </div>
          </div>
        </div>
      )}
      <div className="challenges-categories-difficulties">
        <div className="challenge-discovery">
          <img src={olympeChallenges} alt="olympe les défis" />
        </div>
        <div className="nb-categories">
          <img src={nbCategory} alt="nombre de catégories" className="nb-category" /><p>Catégories de défis</p>
        </div>
        <div className="categories">
          {categories.map((category) => (
            <div className="category" key={category.id}>
              <div className="category-title">
                {category.title}
              </div>
              <div className="category-image-content">
                <div className="category-image">
                  <img src={category.image} alt={category.title} />
                </div>
              </div>
              <div className="category-description">
                <p>{category.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="nb-difficulties">
          <img src={nbDifficulty} alt="nombre de difficultés" className="nb-difficulty" /><p>Difficultés de défis</p>
        </div>
        <div className="difficulties">
          {difficulties.map((oneDifficulty) => (
            <div className="difficulty" key={oneDifficulty.id}>
              <div className="difficulty-title">
                {oneDifficulty.title}
              </div>
              <div className="difficulty-description">
                {oneDifficulty.description}
              </div>
              <div className="difficulty-image-content">
                <div className="difficulty-image">
                  <img src={oneDifficulty.image} alt={oneDifficulty.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="challenges-list">
        {loading && <Loader />}
        {!loading && (
          <div className="challenges-small">
            {challenges.map((challenge) => (
              <ChallengeSmall
                key={challenge.id}
                challengeId={challenge.id}
                title={challenge.title}
                category={challenge.category}
                difficulty={challenge.difficulty}
                description={challenge.description}
                challenges={challenges}
                image={challenge.image}
                slug={challenge.slug}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

// == Props validation
Challenges.propTypes = {
  loadChallenges: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  challenges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  participation: PropTypes.bool.isRequired,
  handleValidateParticipation: PropTypes.func.isRequired,
};

// == Export
export default Challenges;
