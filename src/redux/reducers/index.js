import { combineReducers } from 'redux';

const INITIAL_DATA = {
  user: {
    email: '', // String que armazena o email da pessoa usuária
    password: '',
  },
  wallet: {
    currencies: [], // Array de string
    expenses: [], // Array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
    editor: false, // Valor booleano que indica de uma despesa está sendo editada
    idToEdit: 0, // Valor numérico que armazena o id da despesa que esta sendo editada
  },
  actions: {
    disable: true,
    isFetching: false,
  },
};

function INITIAL_STATE(state = INITIAL_DATA) {
  return state;
}

const reducer = combineReducers({
  INITIAL_STATE,
});

export default reducer;
