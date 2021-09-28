import { connect } from 'react-redux';

// == Import actions
import { fetchChallenges } from 'src/actions/challenges';

// we import the component of presentation
import Home from 'src/components/Home';

// === mapStateToProps
const mapStateToProps = (state) => ({
  // name of the props to get in the state
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
});

// === creation of the assistant
export default connect(mapStateToProps, mapDispatchToProps)(Home);
