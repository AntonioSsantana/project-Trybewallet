import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FETCH_CURRENCY } from '../redux/actions';

class WalletForm extends Component {
  state = {
    valueInput: '',
    descriptionInput: '',
    currency: 'Moeda',
    method: 'Método',
    category: 'Categoria',
  };

  componentDidMount() {
    const { currencies } = this.props;
    currencies();
  }

  onChangeValue = (event) => {
    const { target } = event;
    const { value } = target;

    this.setState({
      valueInput: value,
    });
  };

  onChangeDescription = (event) => {
    const { target } = event;
    const { value } = target;

    this.setState({
      descriptionInput: value,
    });
  };

  onChange = (event) => {
    const { target } = event;
    const { value, id } = target;

    this.setState({
      [id]: value,
    });
  };

  render() {
    const { valueInput, descriptionInput, currency,
      method, category } = this.state;

    const { currencyOptions } = this.props;

    return (
      <div>
        <label htmlFor="number">
          <input
            id="number"
            type="number"
            data-testid="value-input"
            onChange={ this.onChangeValue }
            value={ valueInput }
          />
        </label>
        <label htmlFor="description">
          <input
            id="description"
            type="description"
            data-testid="description-input"
            onChange={ this.onChangeDescription }
            value={ descriptionInput }
          />
        </label>
        <label htmlFor="currency">
          <select
            id="currency"
            data-testid="currency-input"
            onChange={ this.onChange }
            value={ currency }
          >
            {currencyOptions.map((i) => (
              <option
                key={ i }
              >
                {i}
              </option>
            ))}
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
        <label htmlFor="category">
          <select
            id="category"
            data-testid="tag-input"
            onChange={ this.onChange }
            value={ category }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.func.isRequired,
  currencyOptions: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = (state) => ({
  currencyOptions: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  currencies: () => dispatch(FETCH_CURRENCY()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
