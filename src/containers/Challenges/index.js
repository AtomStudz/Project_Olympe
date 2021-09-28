import { connect } from 'react-redux';

// == import actions
import { fetchChallenges, userParticipate, userValidateParticipation } from 'src/actions/challenges';

// == Import
import Challenges from 'src/components/Challenges';

// === mapStateToProps
const mapStateToProps = (state) => ({
  participation: state.challenges.participate,
  challenges: state.challenges.challengesList,
  loading: state.challenges.loading,
  user: state.auth.user,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  loadChallenges: () => {
    const action = fetchChallenges();
    dispatch(action);
  },
  handleParticipate: () => {
    const action = userParticipate();
    dispatch(action);
  },
  handleValidateParticipation: () => {
    const action = userValidateParticipation();
    dispatch(action);
  },
});

// === creation of the assistant
export default connect(mapStateToProps, mapDispatchToProps)(Challenges);
