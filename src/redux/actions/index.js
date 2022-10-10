const ADD_USER = (payload) => ({
  type: 'ADD_USER', payload,
});

const ADD_EXPENSE = (payload) => ({
  type: 'ADD_EXPENSE', payload,
});

export const GET_API = () => ({
  type: 'GET_API',
});

export const getCurrencies = (data) => ({ type: 'ADD_CURRENCY', data });

function FetchAPI(EXPENSES_DATA) {
  return async (dispatch) => {
    try {
      dispatch(GET_API());

      const RESPONSE = await fetch('https://economia.awesomeapi.com.br/json/all');
      const DATA = await RESPONSE.json();

      delete DATA.USDT;
      if (EXPENSES_DATA === undefined) {
        /* return dispatch(ADD_EXPENSE(
          {
            ...EXPENSES_DATA, exchangeRates: DATA,
          },
        )); */
        return dispatch(getCurrencies(Object.keys(DATA)));
      }
      /* return dispatch(getCurrencies(Object.keys(DATA))); */
      return dispatch(ADD_EXPENSE({ ...EXPENSES_DATA, exchangeRates: DATA }));
    } catch {
      console.error(error);
    }
  };
}

export { ADD_USER, ADD_EXPENSE, FetchAPI };
