// == Import axios
import axios from 'axios';

import {
  FETCH_CHALLENGES,
  saveChallenges,
  FETCH_CHALLENGE,
  saveChallenge,
  FETCH_PARTICIPATES,
  saveParticipates,
} from 'src/actions/challenges';

// == URL API

const API_URL_CHALLENGES = 'http://ec2-3-87-212-248.compute-1.amazonaws.com/apo-Olympe-back/public/api/challenges';
const API_URL_CHALLENGE = 'http://ec2-3-87-212-248.compute-1.amazonaws.com/apo-Olympe-back/public/api/challenge/';
const API_URL_DASHBOARD = 'http://ec2-3-87-212-248.compute-1.amazonaws.com/apo-Olympe-back/public/api/participate';

const challengesMiddleware = (store) => (next) => (action) => {
  // we get the token in the localStorage to access to the secure
  const token = localStorage.getItem('token');
  // ?  ACTION AND REQUEST TO GET THE CHALLENGES FOR THE CHALLENGES COMPONENT
  switch (action.type) {
    case FETCH_CHALLENGES:
      axios.get(API_URL_CHALLENGES, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          store.dispatch(saveChallenges(response.data));
        })
        .catch((error) => {
          console.log('error:', error);
        });
      next(action);
      break;

    // ?  ACTION AND REQUEST TO GET THE CHALLENGE FOR THE CHALLENGE COMPONENT
    case FETCH_CHALLENGE: {
      const slug = action.titleOfChallenge;
      axios.get(
        `${API_URL_CHALLENGE}${slug}`,
        { headers: { Authorization: `Bearer ${token}` } },
      )
        .then((response) => {
          store.dispatch(saveChallenge(response.data));
        })
        .catch((error) => {
          console.log('error:', error);
        });
      next(action);
      break;
    }

    // ?  ACTION AND REQUEST TO PUT THE STATUT PARTICIPATE ON A CHALLENGE
    case FETCH_PARTICIPATES: {
      axios.get(
        `${API_URL_DASHBOARD}`,
        { headers: { Authorization: `Bearer ${token}` } },
      )
        .then((response) => {
          store.dispatch(saveParticipates(response.data));
        })
        .catch((error) => {
          console.log('error:', error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default challengesMiddleware;
