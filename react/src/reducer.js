
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
    case 'LIST':
      state = {
        ...state,
        eventList : action.payload.response
      };
      break;
    case 'VIEW':
      state = {
        ...state,
        eventDetails : action.payload.response
      };
      break;
    default:
      break;
  }
  return state;
};
export default formReducer;

