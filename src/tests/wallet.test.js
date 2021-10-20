import React from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent, screen, waitFor, within } from '@testing-library/react';
import { response as mockData, initialStateHeader, initialStateWithExpenses } from './mockData';
import App from '../App';
import Wallet from '../pages/Wallet';

import { renderWithRouterAndStore } from './testConfig';

const apiResponse = Promise.resolve({
  json: () => Promise.resolve(mockData),
  ok: true,
});

const mockedExchange = jest.spyOn(global, 'fetch').mockImplementation(() => apiResponse);

afterEach(() => jest.clearAllMocks());

describe('4 - Crie uma página para sua carteira com as seguintes características:', () => {
  test('A rota para esta página deve ser \'/carteira\'', () => {
    const { history } = renderWithRouterAndStore(<App />);
    history.push('/carteira');
    const email = screen.queryByTestId('email-input');
    expect(email).toBeNull();
  });

  test('O componente deve se chamar Wallet e estar localizado na pasta "src/pages"', () => {
    const { container } = renderWithRouterAndStore(<Wallet />, '/carteira', {});
    expect(container).toBeDefined();
  });
});

describe('5 - Crie um header para a página de carteira contendo as seguintes características:', () => {
  const initial = initialStateHeader;

  test('Um elemento que exiba o email do usuário que fez login.', () => {
    const { store } = renderWithRouterAndStore(<Wallet />, '/carteira', initial);
    const emailField = screen.getByTestId('email-field');

    expect(emailField.innerHTML).not.toBe('');
    expect(emailField).toContainHTML(store.getState().user.email);
  });

  test('Crie um campo com a despesa total gerada pela lista de gastos.', () => {
    renderWithRouterAndStore(<Wallet />, '/carteira', initial);
    const totalField = screen.getByTestId('total-field');

    const INITIAL_VALUE = 0;
    expect(totalField).toContainHTML(INITIAL_VALUE);
  });

  test('Crie um campo que mostre que qual câmbio está sendo utilizado, que será neste caso \'BRL\'', () => {
    renderWithRouterAndStore(<Wallet />, '/carteira');
    const exchangeField = screen.getByTestId('header-currency-field');

    expect(exchangeField).toBeInTheDocument();
    expect(exchangeField).toContainHTML('BRL');
  });
});

describe('6 - Desenvolva um formulário para adicionar uma despesa contendo as seguintes características:', () => {
  test('Um campo para adicionar o valor da despesa', async () => {
    renderWithRouterAndStore(<Wallet />, '/carteira');
    const valueInput = await screen.findByLabelText(/valor/i);

    expect(valueInput).toBeInTheDocument();
  });

  test('Um campo para selecionar em qual moeda será registrada a despesa', async () => {
    renderWithRouterAndStore(<Wallet />, '/carteira');
    const currencyInput = await screen.findByRole('combobox', {
      name: /moeda/i,
    });

    expect(currencyInput).toBeInTheDocument();
  });

  test('Um campo para selecionar qual método de pagamento será utilizado', async () => {
    renderWithRouterAndStore(<Wallet />, '/carteira');
    const methodInput = await screen.findByRole('combobox', {
      name: /método de pagamento/i,
    });

    const moneyOption = screen.getByRole('option', { name: /dinheiro/i });
    const creditOption = screen.getByRole('option', { name: /cartão de crédito/i });
    const debitOption = screen.getByRole('option', { name: /cartão de débito/i });

    expect(methodInput).toBeInTheDocument();
    expect(moneyOption).toBeInTheDocument();
    expect(creditOption).toBeInTheDocument();
    expect(debitOption).toBeInTheDocument();
  });

  test('Um campo para selecionar uma categoria (tag) para a despesa.', async () => {
    renderWithRouterAndStore(<Wallet />, '/carteira');
    const tagInput = await screen.findByRole('combobox', {
      name: /tag/i,
    });
    const foodOption = screen.getByRole('option', { name: /alimentação/i });
    const funOption = screen.getByRole('option', { name: /lazer/i });
    const workOption = screen.getByRole('option', { name: /trabalho/i });
    const transportOption = screen.getByRole('option', { name: /transporte/i });
    const healthOption = screen.getByRole('option', { name: /saúde/i });

    expect(tagInput).toBeInTheDocument();
    expect(foodOption).toBeInTheDocument();
    expect(funOption).toBeInTheDocument();
    expect(workOption).toBeInTheDocument();
    expect(transportOption).toBeInTheDocument();
    expect(healthOption).toBeInTheDocument();
  });

  test('Um campo para adicionar a descrição da despesa', async () => {
    renderWithRouterAndStore(<Wallet />, '/carteira');
    const descriptionInput = await screen.findByRole('textbox', {
      name: /descrição/i,
    });

    expect(descriptionInput).toBeInTheDocument();
  });
});

describe('7 - Implemente a lógica para preencher as opções do campo "Moedas", buscando as siglas das moedas da API', () => {
  test('Um campo para selecionar em qual moeda será registrada a despesa', async () => {
    renderWithRouterAndStore(<Wallet />, '/carteira');
    const currencyInput = await screen.findByRole('combobox', {
      name: /moeda/i,
    });

    const coinOptions = within(currencyInput).getAllByRole('option');
    const coinOptionsValues = coinOptions.map((coinOption) => coinOption.value);

    const expectedCoinOptions = [
      'USD', 'CAD', 'EUR', 'GBP', 'ARS', 'BTC', 'LTC',
      'JPY', 'CHF', 'AUD', 'CNY', 'ILS', 'ETH', 'XRP',
    ];

    expect(coinOptionsValues).toEqual(expectedCoinOptions);

    expect(mockedExchange).toBeCalled();
    expect(mockedExchange).toBeCalledWith('https://economia.awesomeapi.com.br/json/all');
    expect(currencyInput).toBeInTheDocument();
  });
});

describe('8 - Desenvolva a opção de "Adicionar despesa" na sua tabela de gastos', () => {
  test('Crie um botão com o texto \'Adicionar despesa\' que salva as informações da despesa no estado global e atualiza a soma de despesas no header', async () => {
    const { store } = renderWithRouterAndStore(<Wallet />, '/carteira');

    const addButton = await screen.findByRole('button', {
      name: /adicionar despesa/i,
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

    userEvent.type(valueInput, '10');
    userEvent.selectOptions(currencyInput, 'USD');
    userEvent.selectOptions(methodInput, 'Cartão de crédito');
    userEvent.selectOptions(tagInput, 'Lazer');
    userEvent.type(descriptionInput, 'Dez dólares');
    userEvent.click(addButton);

    await waitFor(() => {
      expect(mockedExchange).toBeCalledTimes(2);
    });

    const expectedStateExpense = [
      {
        id: 0,
        value: '10',
        currency: 'USD',
        method: 'Cartão de crédito',
        tag: 'Lazer',
        description: 'Dez dólares',
        exchangeRates: mockData,
      },
    ];

    expect(store.getState().wallet.expenses).toStrictEqual(expectedStateExpense);

    userEvent.type(valueInput, '20');
    userEvent.selectOptions(currencyInput, 'EUR');
    userEvent.selectOptions(methodInput, 'Cartão de débito');
    userEvent.selectOptions(tagInput, 'Trabalho');
    userEvent.type(descriptionInput, 'Vinte euros');
    userEvent.click(addButton);

    await waitFor(() => {
      expect(mockedExchange).toBeCalledTimes(3);
    });

    const expectedStateExpense2 = [
      {
        id: 0,
        value: '10',
        currency: 'USD',
        method: 'Cartão de crédito',
        tag: 'Lazer',
        description: 'Dez dólares',
        exchangeRates: mockData,
      },
      {
        id: 1,
        value: '20',
        currency: 'EUR',
        method: 'Cartão de débito',
        tag: 'Trabalho',
        description: 'Vinte euros',
        exchangeRates: mockData,
      },
    ];

    expect(store.getState().wallet.expenses).toStrictEqual(expectedStateExpense2);

    const totalField = screen.getByTestId('total-field');
    expect(totalField).toContainHTML('187.12');
  });
});

describe('9 - Desenvolva uma tabela com os gastos contendo as seguintes características:', () => {
  const initial = initialStateWithExpenses;

  test('A tabela deve possuir um cabeçalho com os campos Descrição, Tag, Método de pagamento, Valor, Moeda, Câmbio utilizado, Valor convertido e Moeda de conversão', () => {
    renderWithRouterAndStore(<Wallet />, '/carteira', initial);
    const thDescricao = screen.getByRole('columnheader', { name: 'Descrição' });
    const thTag = screen.getByRole('columnheader', { name: 'Tag' });
    const thMetodo = screen.getByRole('columnheader', { name: 'Método de pagamento' });
    const thValor = screen.getByRole('columnheader', { name: 'Valor' });
    const thMoeda = screen.getByRole('columnheader', { name: 'Moeda' });
    const thCambio = screen.getByRole('columnheader', { name: 'Câmbio utilizado' });
    const thValorConvertido = screen.getByRole('columnheader', { name: 'Valor convertido' });
    const thMoedaConversao = screen.getByRole('columnheader', { name: 'Moeda de conversão' });
    const thEditarExcluir = screen.getByRole('columnheader', { name: 'Editar/Excluir' });

    expect(thDescricao).toBeInTheDocument();
    expect(thTag).toBeInTheDocument();
    expect(thMetodo).toBeInTheDocument();
    expect(thValor).toBeInTheDocument();
    expect(thMoeda).toBeInTheDocument();
    expect(thCambio).toBeInTheDocument();
    expect(thValorConvertido).toBeInTheDocument();
    expect(thMoedaConversao).toBeInTheDocument();
    expect(thEditarExcluir).toBeInTheDocument();
  });

  test('A tabela deve ser alimentada pelo estado da aplicação, que estará disponível na chave expenses que vem do reducer wallet.', () => {
    renderWithRouterAndStore(<Wallet />, '/carteira', initial);
    expect(screen.getAllByRole('cell', { name: 'Dez dólares' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: 'Lazer' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: 'Cartão de crédito' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: '10' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: 'Dólar Comercial' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: '5.58' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: '55.75' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: 'Real' })[0]).toBeInTheDocument();

    expect(screen.getAllByRole('cell', { name: 'Vinte euros' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: 'Trabalho' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: 'Dinheiro' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: '20' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: 'Euro' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: '6.57' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: '131.37' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: 'Real' })[1]).toBeInTheDocument();
  });
});

describe('10 - Crie um botão para deletar uma despesa da tabela contendo as seguintes características:', () => {
  const initial = initialStateWithExpenses;

  test('O botão deve estar dentro do último item da linha da tabela e deve possuir `data-testid="delete-btn"`', () => {
    renderWithRouterAndStore(<Wallet />, '/carteira', initial);
    expect(screen.getAllByTestId('delete-btn')[0]).toBeInTheDocument();
  });

  test('Ao ser clicado, o botão deleta a linha da tabela, alterando o estado global.', () => {
    const { store } = renderWithRouterAndStore(<Wallet />, '/carteira', initial);
    const deleteBtn = screen.getAllByTestId('delete-btn')[0];
    fireEvent.click(deleteBtn);

    expect(screen.getByRole('cell', { name: 'Vinte euros' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'Trabalho' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'Dinheiro' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: '20' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'Euro' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: '6.57' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: '131.37' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'Real' })).toBeInTheDocument();
    const newExpenses = [
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

  test('Ao clicar no botão para remover uma despesa, o valor correspondente deve ser subtraído e a despesa total deve ser atualizada no header', () => {
    const { store } = renderWithRouterAndStore(<Wallet />, '/carteira', initial);
    const deleteBtn = screen.getAllByTestId('delete-btn')[0];

    fireEvent.click(deleteBtn);

    const newExpenses = [
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

    const totalField = screen.getByTestId('total-field');
    expect(totalField).toContainHTML('131.37');
  });
});
