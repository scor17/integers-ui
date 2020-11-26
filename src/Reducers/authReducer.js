export const INITIAL_STATE = {
  pending: false,
  success: false,
  failed: false,
  isSignedIn: false
};

const reducer = {
  AUTH_REQUEST: (state) => ({
    ...state,
    pending: true,
    success: false,
    failed: false
  }),
  AUTH_SUCCESS: (state) => ({
    ...state,
    pending: false,
    success: true,
    isSignedIn: true
  }),
  AUTH_FAIL: (state) => ({
    ...state,
    pending: false,
    failed: true
  })
};

export const authReducer = (state, action) => {
  return reducer[action](state) || state;
};
