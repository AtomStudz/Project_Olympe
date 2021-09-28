import { connect } from 'react-redux';

// == import actions
import { fetchParticipates, fetchChallenges } from 'src/actions/challenges';
import { getUser } from 'src/actions/auth';

// == Import
import Dashboard from 'src/components/Dashboard';

// === mapStateToProps
const mapStateToProps = (state) => ({
  participates: state.challenges.participatesList,
  challenges: state.challenges.challengesList,
  challenge: state.challenge.challengeList,
  loading: state.challenges.loading,
  user: state.auth.user,
  userProfil: state.user.userList,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  loadChallenges: () => {
    const action = fetchChallenges();
    dispatch(action);
  },
  loadParticipates: () => {
    const action = fetchParticipates();
    dispatch(action);
  },
  loadUserProfil: () => {
    const action = getUser();
    dispatch(action);
  },
});

// === creation of the assistant
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
