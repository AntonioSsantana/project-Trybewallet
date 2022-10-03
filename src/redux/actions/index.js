const ADD_USER = (value) => ({ type: 'ADD_USER', value });

const ADD_EXPENSE = (value) => ({ type: 'ADD_EXPENSE', value });

function ADD_CURRENCY(payload) {
  return { type: 'ADD_CURRENCY', payload };
}

function FAIL_REQUEST(error) {
  return { type: 'FAIL_REQUEST', payload: error };
}

function FETCH_CURRENCY() {
  return async (dispatch) => {
    try {
      const RESPONSE = await fetch('https://economia.awesomeapi.com.br/json/all');
      const DATA = await RESPONSE.json();

      delete DATA.USDT;

      return dispatch(ADD_CURRENCY({ DATA }));
    } catch {
      return dispatch(FAIL_REQUEST('Erro'));
    }
  };
}

export { ADD_USER, ADD_EXPENSE, FETCH_CURRENCY };
