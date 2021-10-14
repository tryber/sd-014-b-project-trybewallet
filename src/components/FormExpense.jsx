import React, { useState, useEffect } from 'react';

const paymentOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const expenseOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

export default function FormExpense() {
  const [allCoins, changeCoinsArray] = useState([]);

  const fetchCurrency = async () => {
    const getApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await getApi.json();
    const coins = Object.keys(response).filter((currency) => currency !== 'USDT');
    changeCoinsArray(coins);
  };

  useEffect(() => {
    fetchCurrency();
  }, []);

  return (
    <form>
      <label htmlFor="value">
        Valor:
        <input type="text" id="value" />
      </label>
      <label htmlFor="description">
        Descrição:
        <input type="text" id="description" />
      </label>
      <label htmlFor="currency">
        Moeda:
        <select id="currency">
          { allCoins.map((coin) => (
            <option key={ coin } value={ coin }>{coin}</option>)) }
        </select>
      </label>
      <label htmlFor="paymentMethod">
        Método de pagamento:
        <select id="paymentMethod">
          { paymentOptions.map((method) => (
            <option key={ method } value={ method }>{method}</option>)) }
        </select>
      </label>
      <label htmlFor="category">
        Tag:
        <select id="category">
          { expenseOptions.map((method) => (
            <option key={ method } value={ method }>{method}</option>)) }
        </select>
      </label>
    </form>

  );
}
