// == Import actions
import { LOG_IN, DISPLAY_USER, LOG_OUT } from 'src/actions/auth';

const initialState = {
  // tells if the user is authentified
  userList: {},
  loading: true,
};

// console.log(initialState);

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
      };

    case DISPLAY_USER:
      return {
        ...state,
        userList: action.loadedUser,
        loading: false,
      };

    case LOG_OUT:
      return {
        ...state,
        userList: {},
      };

    default:
      return state;
  }
}

export default userReducer;
