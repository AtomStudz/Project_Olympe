import {
  updateUserField,
  logIn,
  getUser,
  displayUser,
} from 'src/actions/auth';

import { connect } from 'react-redux';

// we import the component of presentation
import LoginForm from 'src/components/Login/LoginForm';

// === mapStateToProps
const mapStateToProps = (state) => ({
  // name of the props to get in the state
  email: state.auth.email,
  password: state.auth.password,
  user: state.auth.user,
  userProfil: state.user.userList,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    // console.log(`newValue '${newValue}' for field '${name}'`);
    dispatch(updateUserField(newValue, name));
  },
  handleLogin: () => {
    dispatch(logIn());
    // dispatch(getUser());
    // dispatch(displayUser());
  },
  loadUserProfil: () => {
    const action = getUser();
    dispatch(action);
  },
});

// === creation of the assistant
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
