// Generic reducer function.
const reducer = (state, newState) => {
  return {
    ...state,
    ...newState,
  };
};

export { reducer };
