// == Import actions
import {
  SAVE_CHALLENGES,
  SAVE_PARTICIPATES,
  USER_PARTICIPATE,
  USER_VALIDATE_PARTICIPATION,
} from 'src/actions/challenges';
import { SAVE_USER } from 'src/actions/auth';

const initialState = {
  // list of challenges
  challengesList: [],
  // show if we are loading challenges
  loading: true,
  // show some stuff if user connected
  user: false,
  // participatesLIst
  participatesList: [],
  // participation of a challenge
  participate: false,
};

function challengesReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_CHALLENGES:
      return {
        ...state,
        challengesList: action.loadedChallenges,
        loading: false,
      };

    case SAVE_USER:
      return {
        ...state,
        user: true,
      };

    case SAVE_PARTICIPATES:
      return {
        ...state,
        participatesList: action.loadedParticipates,
        loading: false,
      };

    case USER_PARTICIPATE:
      return {
        ...state,
        participate: true,
      };

    case USER_VALIDATE_PARTICIPATION:
      return {
        ...state,
        participate: false,
      };
    default:
      return state;
  }
}

export default challengesReducer;
