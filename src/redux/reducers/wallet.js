const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_CURRENCY':
    return {
      ...state,
      currencies: action.data,
    };
  case 'ADD_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, action.value],
    };
  default:
    return state;
  }
}

export default wallet;
