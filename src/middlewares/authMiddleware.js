// == Import axios
import axios from 'axios';

// == Import npm
import jwt_decode from 'jwt-decode';

import {
  LOG_IN,
  saveUser,
  LOG_OUT,
  GET_USER,
  displayUser,
  getUser,
} from 'src/actions/auth';

// == URL API
const API_URL_LOGIN = 'http://ec2-3-87-212-248.compute-1.amazonaws.com/apo-Olympe-back/public/api/login_check';
const API_URL_USER = 'http://ec2-3-87-212-248.compute-1.amazonaws.com/apo-Olympe-back/public/api/user/';

// == AuthMiddleware
const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
  // ?  ACTION AND REQUEST TO CONNECT THE USER
    case LOG_IN: {
      const { email, password } = store.getState().auth;

      axios.post(API_URL_LOGIN, {
        username: email,
        password: password,
      })
        .then((response) => {
          // to show if the response is 200 or 404, 401 etc
          // console.log(response);
          // to show the full response
          // console.log('middleware auth : actions dispatch', response);
          // we put the token in the localStorage thanks to setItem
          localStorage.setItem('token', response.data.token);
          // console.log(localStorage);
          // to dispatch action : we need the status to save user and the token too
          // store.dispatch(saveUser(response.status, response.data.token));
          // const user = JSON.parse(localStorage.getItem('token'));
          // const user = localStorage.getItem('token');
          store.dispatch(saveUser());
          store.dispatch(getUser());
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    // ?  ACTION AND REQUEST TO GET AND DISPLAY THE USER IF HE IS CONNECTED
    case GET_USER: {
      const token = localStorage.getItem('token');
      // console.log(token !== null);
      if (token !== null) {
        const decoded = jwt_decode(token);
        axios.get(
          `${API_URL_USER}${decoded.username}`,
          { headers: { Authorization: `Bearer ${token}` } },
        )
          .then((response) => {
            // to show if the response is 200 or 404, 401 etc
            // console.log(response.data);
            store.dispatch(displayUser(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
      }
      next(action);
      break;
    }

    // ?  ACTION TO DISCONNECT THE USER AND REMOVE THE TOKEN
    case LOG_OUT: {
      localStorage.removeItem('token');
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default authMiddleware;
