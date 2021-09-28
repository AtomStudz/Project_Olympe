// == Action types
export const FETCH_CHALLENGES = 'FETCH_CHALLENGES';
export const SAVE_CHALLENGES = 'SAVE_CHALLENGES';
export const FETCH_CHALLENGE = 'FETCH_CHALLENGE';
export const SAVE_CHALLENGE = 'SAVE_CHALLENGE';
export const FETCH_PARTICIPATES = 'FETCH_PARTICIPATE';
export const SAVE_PARTICIPATES = 'SAVE_PARTICIPATE';
export const USER_PARTICIPATE = 'USER_PARTICIPATE';
export const USER_VALIDATE_PARTICIPATION = 'USER_VALIDATE_PARTICIPATION';

// === Action creators

// =========== CHALLENGES
export const fetchChallenges = () => ({
  type: FETCH_CHALLENGES,
});

export const saveChallenges = (challenges) => ({
  type: SAVE_CHALLENGES,
  loadedChallenges: challenges,
});

// =========== ONE CHALLENGE

export const fetchChallenge = (titleOfChallenge) => ({
  type: FETCH_CHALLENGE,
  titleOfChallenge,
});

export const saveChallenge = (challenge) => ({
  type: SAVE_CHALLENGE,
  loadedChallenge: challenge,

});

// =========== PARTICIPATE

export const fetchParticipates = () => ({
  type: FETCH_PARTICIPATES,
});

export const saveParticipates = (participates) => ({
  type: SAVE_PARTICIPATES,
  loadedParticipates: participates,
});

export const userParticipate = () => ({
  type: USER_PARTICIPATE,
});

export const userValidateParticipation = () => ({
  type: USER_VALIDATE_PARTICIPATION,
});
