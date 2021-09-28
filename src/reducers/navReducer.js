// == Import actions
import { SAVE_USER, LOG_OUT, RECONNECT_USER } from 'src/actions/auth';

const initialState = {
  // tells if the user is authentified
  user: false,
};

// console.log(initialState);

function navReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        user: true,
      };

    case RECONNECT_USER:
      return {
        ...state,
        user: true,
      };

    case LOG_OUT:
      return {
        ...state,
        user: false,
      };

    default:
      return state;
  }
}

export default navReducer;
