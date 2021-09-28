import { connect } from 'react-redux';

import { fetchChallenge } from 'src/actions/challenges';

import Challenge from 'src/components/Challenge';

// === mapStateToProps

const mapStateToProps = (state) => ({
  challenge: state.challenge.challengeList,
  loading: state.challenge.loading,
  user: state.auth.user,
});
// console.log(Challenge);

const mapDispatchToProps = (dispatch) => ({
  loadChallenge: (titleOfChallenge) => {
    const action = fetchChallenge(titleOfChallenge);
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Challenge);
