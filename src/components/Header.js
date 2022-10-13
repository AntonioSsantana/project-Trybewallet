import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  componentDidMount() {
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    this.onTotalExpenses();
  }

  onTotalExpenses() {
    const { expenses } = this.props;

    return (
      (expenses.length === 0) ? '0.00' : Math.floor(
        expenses.reduce((
          acc,
          { value,
            exchangeRates,
            currency },
        ) => {
          const PRICE$ = Object.values(exchangeRates)
            .filter(({ code }) => code === currency);
          return (acc + parseFloat(PRICE$[0].ask) * value);
        }, 0.00) * 100,
      ) / 100
    );
  }

  render() {
    const { email } = this.props;
    return (
      <div className="div-header">
        <span data-testid="email-field">
          Email:
          {email}
        </span>
        <span data-testid="total-field">
          {
            this.onTotalExpenses()
          }
          R$
        </span>
        <span
          data-testid="header-currency-field"
        >
          Conversão para: BRL
        </span>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
