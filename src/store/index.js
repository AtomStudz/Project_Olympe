// == Import redux & redux devtools
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// == Import middleware
import challengesMiddleware from 'src/middlewares/challengesMiddleware';
import authMiddleware from 'src/middlewares/authMiddleware';

// == Import reducer
import reducer from 'src/reducers';

// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    challengesMiddleware,
    authMiddleware,
    // ... other Middleware
  ),
);
// == Create store with reducer & enhancers
const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
