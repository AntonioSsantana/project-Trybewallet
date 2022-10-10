import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FetchAPI } from '../redux/actions';

class WalletForm extends Component {
  state = {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  onChange = (event) => {
    const { target } = event;
    const { value, id } = target;

    this.setState({
      [id]: value,
    });
  };

  onSaveButton = (event) => {
    event.preventDefault();

    const { expenses, addExpense } = this.props;
    const DATA = { id: expenses.length, ...this.state };

    addExpense(DATA);

    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  };

  render() {
    const { value, description, currency,
      method, tag } = this.state;

    const { currencies } = this.props;
    return (

      <form onSubmit={ this.onSaveButton }>
        <label htmlFor="value">
          <input
            id="value"
            type="number"
            data-testid="value-input"
            onChange={ this.onChange }
            value={ value }
          />
        </label>
        <label htmlFor="description">
          <input
            id="description"
            type="description"
            data-testid="description-input"
            onChange={ this.onChange }
            value={ description }
          />
        </label>
        <label htmlFor="currency">
          <select
            id="currency"
            data-testid="currency-input"
            onChange={ this.onChange }
            value={ currency }
          >
            {
              currencies.map((i) => (
                <option
                  key={ i }
                >
                  {i}
                </option>
              ))
            }
          </select>
        </label>
        <label htmlFor="method">
          <select
            id="method"
            data-testid="method-input"
            onChange={ this.onChange }
            value={ method }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          <select
            id="tag"
            data-testid="tag-input"
            onChange={ this.onChange }
            value={ tag }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
          <button
            type="submit"
          >
            Adicionar despesa
          </button>
        </label>
      </form>
    );
  }
}

WalletForm.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  addExpense: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string.isRequired,
    codein: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    high: PropTypes.string.isRequired,
    low: PropTypes.string.isRequired,
  })).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(FetchAPI()),
  addExpense: (DATA) => dispatch(FetchAPI(DATA)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
