// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import Router
import { Link } from 'react-router-dom';

// == Import
import './home.scss';

// == Import Images
import secondLogo from 'src/assets/images/logo2.png';
import motivation from 'src/assets/images/pexels-motivates.jpg';
import olympus from 'src/assets/images/dashboard.png';

// == Import component
import Loader from 'src/components/Loader';
import RandomChallenges from 'src/components/Home/RandomChallenges';
import Quotes from 'src/components/Home/Quotes';
import Footer from 'src/components/Footer';

// == Component
const Home = ({ loadChallenges, loading, challenges }) => {
  // == useEffect
  useEffect(() => {
    loadChallenges();
    window.scrollTo(0, 0);
  }, []);

  //! we have to put it in Utils
  challenges.sort(() => Math.random() - 0.5);
  const challengesSplice = challenges.splice(0, 4);

  return (
    <div className="home">
      <div className="home-top">
        <h1 className="hidden-title">Olympe</h1>
        <h2 className="welcome">Bienvenue héros ! Inscris-toi et participes aux défis Olympiens !
        </h2>
        <img src={secondLogo} alt="logo olympe" className="home-logo" />
      </div>
      <div className="random-challenges-list">
        {loading && <Loader />}
        {!loading && (
          <div className="random-challenges">
            {challengesSplice.map((challenge) => (
              <Link to="/defis">
                <RandomChallenges
                  key={challenges.id}
                  title={challenge.title}
                  difficulty={challenge.difficulty}
                  category={challenge.category}
                  description={challenge.description}
                  challenges={challenges}
                  image={challenge.image}
                  slug={challenge.slug}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="motiv-container">
        <div className="motivation-container">
          <img src={motivation} alt="olympe motivation" className="motivation" />
        </div>
        <div className="text-motivation">
          <div className="olympe-presentation">
            <img src={olympus} alt="olympe" />
            <div className="text-presentation">
              <text>
                Olympe va te pousser à dépasser tes bornes des limites ! <br />
                Ici tu peux participer à des défis variés et originaux,
                une façon ludique de sortir de ta zone de confort
              </text>
            </div>
          </div>
        </div>
        <div className="blob-quote-container">
          <Quotes />
        </div>
      </div>
      <Footer />
    </div>
  );
};

// == Props validation
Home.propTypes = {
  loadChallenges: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  challenges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Home;
