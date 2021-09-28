import { reconnectUser, getUser } from 'src/actions/auth';

import { connect } from 'react-redux';

// we import the component of presentation
import Olympe from 'src/components/Olympe';

// === mapStateToProps
const mapStateToProps = (state) => ({
  user: state.auth.user,
  userProfil: state.user.userList,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  reconnectUser: () => {
    dispatch(reconnectUser());
  },
  loadUserProfil: () => {
    const action = getUser();
    dispatch(action);
  },
});

// === creation of the assistant
export default connect(mapStateToProps, mapDispatchToProps)(Olympe);
