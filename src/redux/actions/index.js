const ADD_USER = (value) => ({
  type: 'ADD_USER', value,
});

const ADD_EXPENSE = (value) => ({
  type: 'ADD_EXPENSE', value,
});

export const GET_API = () => {
  const obj = {
    type: 'GET_API',
  };
  return obj;
};

export const getCurrencies = (data) => {
  const obj = {
    type: 'ADD_CURRENCY',
    data,
  };
  return obj;
};

function FetchAPI(EXPENSES_DATA) {
  return async (dispatch) => {
    try {
      dispatch(GET_API());

      const RESPONSE = await fetch('https://economia.awesomeapi.com.br/json/all');
      const DATA = await RESPONSE.json();

      delete DATA.USDT;
      if (EXPENSES_DATA) {
        return dispatch(ADD_EXPENSE(
          {
            ...EXPENSES_DATA, exchangeRates: DATA,
          },
        ));
      }
      return dispatch(getCurrencies(Object.keys(DATA)));
    } catch {
      console.error(error);
    }
  };
}

export { ADD_USER, ADD_EXPENSE, FetchAPI };
