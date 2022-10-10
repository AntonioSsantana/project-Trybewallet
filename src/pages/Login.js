import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ADD_USER } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    disabled: true,
  };

  onInputChangeFormEmail = (event) => {
    const { target } = event;
    const { value } = target;

    this.setState({
      email: value,
    });
  };

  onInputChangeFormPassword = (event) => {
    const { target } = event;
    const { value } = target;

    this.setState({
      password: value,
    });
  };

  submitButtonForm = () => {
    const { email, password } = this.state;
    const MIN_CHARACTERS = 6;

    // Sobre email regex:
    // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail

    const EMAIL_REGEX = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const EMAIL_VALIDATION = EMAIL_REGEX.test(email);

    return !(EMAIL_VALIDATION && password.length >= MIN_CHARACTERS);
  };

  onSucessForm = (event) => {
    event.preventDefault();
    const { USER_DATA, history } = this.props;
    USER_DATA(this.state);
    history.push('/carteira');
  };

  render() {
    return (
      <div>
        <form onSubmit={ this.onSucessForm }>
          Login
          <label htmlFor="email">
            Email:
            <input
              id="email"
              type="email"
              data-testid="email-input"
              onInput={ this.onInputChangeFormEmail }
              placeholder="Email"
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              id="password"
              type="password"
              data-testid="password-input"
              onInput={ this.onInputChangeFormPassword }
              placeholder="Senha"
            />
          </label>
          <button
            type="submit"
            disabled={ this.submitButtonForm() }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const obj = {
    USER_DATA: (state) => dispatch(ADD_USER(state)),
  };
  return obj;
};

Login.propTypes = {
  USER_DATA: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
