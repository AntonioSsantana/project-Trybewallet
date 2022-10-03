const INITIAL_STATE = {
  data: '',
  currencies: [],
  expenses: {},
};

const ADD_CURRENCY = 'ADD_CURRENCY';
const ADD_EXPENSE = 'ADD_EXPENSE';
const FAIL_REQUEST = 'FAIL_REQUEST';

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_CURRENCY:
    return { ...state, currencies: Object.keys(action.payload.data) };
  case FAIL_REQUEST:
    return { ...state, error: action.payload };
  case ADD_EXPENSE:
    return { ...state, ...action.payload };
  default:
    return state;
  }
}

export default wallet;
