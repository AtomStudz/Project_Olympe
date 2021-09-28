// == Import actions
import {
  UPDATE_USER_FIELD,
  SAVE_USER,
  LOG_OUT,
  RECONNECT_USER,
} from 'src/actions/auth';

const initialState = {
  // content the field email
  email: '',
  // content of the field password
  password: '',
  // tells if the user is authentified
  // response: null,
  // token
  // token: null,
  user: false,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_FIELD:
      if (action.name === 'email') {
        return {
          ...state,
          email: action.newValue,
        };
      }
      return {
        ...state,
        password: action.newValue,
      };

    case SAVE_USER:
      return {
        ...state,
        // response: action.response,
        // token: action.token,
        // we clean all the field
        email: '',
        password: '',
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

export default authReducer;
