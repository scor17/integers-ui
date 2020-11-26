import { useReducer } from 'react';

export const INITIAL_STATE = {
  signUpPending: false,
  signUpSuccess: false,
  signUpFailed: false,
  signInPending: false,
  signInSuccess: false,
  signInFailed: false,
  isSignedIn: false,

  nextPending: false,
  nextSuccess: false,
  nextFailed: false,
  currentPending: false,
  currentSuccess: false,
  currentFailed: false,
  updatePending: true,
  updateSuccess: false,
  updateFailed: false,
  currentInt: null
};

const authReducer = {
  SIGN_UP_REQUEST: (state) => ({
    ...state,
    signUpPending: true,
    signUpSuccess: false,
    signUpFailed: false
  }),
  SIGN_UP_SUCCESS: (state) => ({
    ...state,
    signUpPending: false,
    signUpSuccess: true,
    isSignedIn: true
  }),
  SIGN_UP_FAIL: (state) => ({
    ...state,
    signUpPending: false,
    signUpFailed: true,
    isSignedIn: false
  }),
  SIGN_IN_REQUEST: (state) => ({
    ...state,
    signInPending: true,
    signInSuccess: false,
    signInFailed: false
  }),
  SIGN_IN_SUCCESS: (state) => ({
    ...state,
    signInPending: false,
    signInSuccess: true,
    isSignedIn: true
  }),
  SIGN_IN_FAIL: (state) => ({
    ...state,
    signInPending: false,
    signInFailed: true,
    isSignedIn: false
  })
};

const integersReducer = {
  NEXT_REQUEST: (state) => ({
    ...state,
    nextPending: true,
    nextSuccess: false,
    nextFailed: false
  }),
  NEXT_SUCCESS: (state, action) => ({
    ...state,
    nextPending: false,
    nextSuccess: true,
    currentInt: action.value
  }),
  NEXT_FAIL: (state) => ({
    ...state,
    nextPending: false,
    nextFailed: true
  }),
  CURRENT_REQUEST: (state) => ({
    ...state,
    currentPending: true,
    currentSuccess: false,
    currentFailed: false
  }),
  CURRENT_SUCCESS: (state, action) => ({
    ...state,
    currentPending: false,
    currentSuccess: true,
    currentInt: action.value
  }),
  CURRENT_FAIL: (state) => ({
    ...state,
    currentPending: false,
    currentFailed: true
  }),
  UPDATE_REQUEST: (state) => ({
    ...state,
    updatePending: true,
    updateSuccess: false,
    updateFailed: false
  }),
  UPDATE_SUCCESS: (state, action) => ({
    ...state,
    updatePending: false,
    updateSuccess: true,
    currentInt: action.value
  }),
  UPDATE_FAIL: (state) => ({
    ...state,
    updatePending: false,
    updateFailed: true
  })
};

const combinedReducer = { ...authReducer, ...integersReducer };

const reducer = (state, action) => {
  const nextState = combinedReducer[action.type](state, action);
  console.log(nextState);
  return nextState;
};

const useGlobalState = () => {
  const [globalState, dispatch] = useReducer(reducer, INITIAL_STATE);
  return { globalState, dispatch };
};

export default useGlobalState;
