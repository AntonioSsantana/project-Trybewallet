import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          Login
          <label htmlFor="input-email">
            <input
              id="input-email"
              type="email"
              data-testid="email-input"
            />
          </label>
          <label htmlFor="input-password">
            <input
              id="input-password"
              type="password"
              data-testid="password-input"
            />
          </label>
          <button type="button">Entrar</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect((mapStateToProps))(Login);
