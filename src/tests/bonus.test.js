import React from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { response as mockData, initialStateWithExpenses } from './mockData';
import Wallet from '../pages/Wallet';

import { renderWithRouterAndStore } from './testConfig';

afterEach(() => jest.clearAllMocks());

describe('11 - Crie um botão para editar uma despesa da tabela contendo as seguintes características:', () => {
  const initial = initialStateWithExpenses;

  test('O botão deve estar dentro da linha da tabela e deve possuir `data-testid="edit-btn"`', () => {
    renderWithRouterAndStore(<Wallet />, '/carteira', initial);
    expect(screen.getAllByTestId('edit-btn')[0]).toBeInTheDocument();
  });

  test('Ao ser clicado, o botão habilita um formulário para editar a linha da tabela. Ao clicar em "Editar despesa" ela é atualizada e atualiza a soma de despesas no header.', async () => {
    const { store } = renderWithRouterAndStore(<Wallet />, '/carteira', initial);
    const toggleEditBtn = screen.getAllByTestId('edit-btn')[0];
    fireEvent.click(toggleEditBtn);

    const editButton = await screen.findByRole('button', {
      name: /Editar despesa/i,
    });
    const valueInput = await screen.findByLabelText(/valor/i);
    const currencyInput = await screen.findByRole('combobox', {
      name: /moeda/i,
    });
    const methodInput = await screen.findByRole('combobox', {
      name: /método de pagamento/i,
    });
    const tagInput = await screen.findByRole('combobox', {
      name: /tag/i,
    });
    const descriptionInput = await screen.findByRole('textbox', {
      name: /descrição/i,
    });

    userEvent.type(valueInput, '100');
    userEvent.selectOptions(currencyInput, 'CAD');
    userEvent.selectOptions(methodInput, 'Dinheiro');
    userEvent.selectOptions(tagInput, 'Trabalho');
    userEvent.type(descriptionInput, 'Cem dólares canadenses');

    fireEvent.click(editButton);

    await waitFor(() => {
      expect(
        screen.getByRole('cell', { name: 'Cem dólares canadenses' }),
      ).toBeInTheDocument();
    });

    expect(screen.getAllByRole('cell', { name: 'Trabalho' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: 'Dinheiro' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: '100' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: 'Dólar Canadense' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: '4.20' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: '420.41' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: 'Real' })[0]).toBeInTheDocument();

    const newExpenses = [
      {
        id: 0,
        value: '100',
        currency: 'CAD',
        method: 'Dinheiro',
        tag: 'Trabalho',
        description: 'Cem dólares canadenses',
        exchangeRates: mockData,
      },
      {
        id: 1,
        value: '20',
        currency: 'EUR',
        method: 'Dinheiro',
        tag: 'Trabalho',
        description: 'Vinte euros',
        exchangeRates: mockData,
      },
    ];

    expect(store.getState().wallet.expenses).toStrictEqual(newExpenses);
  });
});
