import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Verifica a aplicação', () => {
  it('Verifica se possui os inputs e o botão com o texto "Entrar"', () => {
    renderWithRouterAndRedux(<App />);

    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const btnLogin = screen.getByRole('button', { name: /entrar/i });

    expect(inputPassword).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(btnLogin).toBeInTheDocument();
  });
  it('Verifica se ao completar as informações é redirecionado', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const btnLogin = screen.getByRole('button', { name: /entrar/i });

    userEvent.type(inputEmail, 'user@gmail.com');
    userEvent.type(inputPassword, '123456');
    userEvent.click(btnLogin);

    const { location: { pathname } } = history;

    expect(pathname).toBe('/carteira');
  });
});
