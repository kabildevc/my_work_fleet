
const formReducer = (state = {
  login: {},
}, action) => {
  switch (action.type) {
    case 'LOGIN':
      state = {
        ...state,
        login : action.payload
      };
      break;
    default:
      break;
  }
  return state;
};
export default formReducer;

