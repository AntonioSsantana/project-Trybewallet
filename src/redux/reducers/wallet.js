const INITIAL_STATE = {
  data: '',
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_EXPENSE':
    return {};
  default:
    return state;
  }
}

export default wallet;
