import { combineReducers } from 'redux';

// == Import reducers
import authReducer from './authReducer';
import navReducer from './navReducer';
import challengesReducer from './challengesReducer';
import challengeReducer from './challengeReducer';
import userReducer from './userReducer';

// Principal reducer for controlling all of them
const rootReducer = combineReducers({
  auth: authReducer,
  nav: navReducer,
  challenges: challengesReducer,
  challenge: challengeReducer,
  user: userReducer,
});

export default rootReducer;
