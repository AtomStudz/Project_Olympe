import { logOut, getUser } from 'src/actions/auth';

import { connect } from 'react-redux';

import Nav from 'src/components/Nav';

// === mapStateToProps
const mapStateToProps = (state) => ({
  user: state.auth.user,
  userProfil: state.user.userList,
  loading: state.user.loading,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logOut());
  },
  loadUserProfil: () => {
    const action = getUser();
    dispatch(action);
  },
});

// === creation of the assistant
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
