import React, { useEffect, useState } from 'react';
import fetchCurrency from '../service';
import PaymentMethodLabel from './PaymentMethodLabel';
import TagLabel from './TagLabel';

function ExpenseForm() {
  const [currency, setCurrency] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await (await fetchCurrency());
      delete result.USDT;
      const resultArray = Object.keys(result);
      setCurrency(resultArray);
    })();
  }, []);

  return (
    <form>
      <label htmlFor="value-field">
        Valor
        <input type="text" id="value-field" placeholder="Digite o valor da despesa" />
      </label>
      <label htmlFor="expense-description">
        <input type="text" placeholder="descrição da despesa" id="expense-description" />
        Descrição
      </label>
      <label htmlFor="currency">
        <select id="currency">
          {currency.map((coin) => <option value={ coin } key={ coin }>{coin}</option>)}
        </select>
        Moeda
      </label>
      <PaymentMethodLabel />
      <TagLabel />
    </form>
  );
}

export default ExpenseForm;
