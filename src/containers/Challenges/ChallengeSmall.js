import { connect } from 'react-redux';

// == import actions
import { fetchParticipates, fetchChallenge, userParticipate } from 'src/actions/challenges';

// == Import
import ChallengeSmall from 'src/components/Challenges/ChallengeSmall';

// === mapStateToProps
const mapStateToProps = (state) => ({
  loading: state.challenges.loading,
  challenges: state.challenges.challengesList,
  user: state.auth.user,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  handleFetchParticipates: () => {
    dispatch(fetchParticipates());
  },
  handleSlug: (slug) => {
    dispatch(fetchChallenge(slug));
  },
  handleParticipate: () => {
    const action = userParticipate();
    dispatch(action);
  },
});

// === creation of the assistant
export default connect(mapStateToProps, mapDispatchToProps)(ChallengeSmall);
