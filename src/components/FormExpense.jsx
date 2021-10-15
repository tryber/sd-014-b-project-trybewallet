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

  const selectMap = (id, label, array) => (
    <label htmlFor={ id }>
      {label}
      <select id={ id }>
        { array.map((element) => (
          <option key={ element } value={ element }>{element}</option>)) }
      </select>
    </label>
  );

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
      { selectMap('currency', 'Moeda:', allCoins) }
      { selectMap('paymentMethod', 'Método de pagamento:', paymentOptions) }
      { selectMap('category', 'Tag:', expenseOptions) }
      <button type="button">Adicionar despesa</button>
    </form>

  );
}
