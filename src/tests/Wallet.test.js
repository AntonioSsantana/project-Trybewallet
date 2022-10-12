import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';

describe('Testa o componente Wallet.js', () => {
  it('Verifica se a despesa é adicionada', async () => {
    renderWithRouterAndRedux(<Wallet />);
    const addExpenseBtn = screen.getByRole('button', {
      name: /adicionar despesa/i,
    });
    const descriptionInput = screen.getByTestId('description-input');

    expect(addExpenseBtn).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();

    userEvent.type(descriptionInput, 'Carne bovina');
    userEvent.click(addExpenseBtn);

    const expenseText = await screen.findByText(/carne bovina/i);
    expect(expenseText).toBeInTheDocument();
  });
});
