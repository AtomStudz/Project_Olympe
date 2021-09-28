// == Import actions
import {
  SAVE_CHALLENGE,

} from 'src/actions/challenges';

const initialState = {
  // show if we are loading challenges
  loading: true,
  // show some stuff if user connected
  user: false,
  // challengeTitle,
  challengeList: {},
};

function challengeReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_CHALLENGE:
      return {
        ...state,
        challengeList: action.loadedChallenge,
        loading: false,
      };
    default:
      return state;
  }
}

export default challengeReducer;
