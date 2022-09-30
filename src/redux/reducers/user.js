const INITIAL_STATE = {
  email: '',
  password: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_USER':
    console.log(action);
    return ({ ...state, ...action.value });
  default:
    return state;
  }
}

export default user;
