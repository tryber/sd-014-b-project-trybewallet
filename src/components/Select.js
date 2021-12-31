import React from 'react';
import PropTypes from 'prop-types';

function Select({ setTag, setMethod, setCurrency, tag, method, currency, coins }) {
  return (
    <div>
      <label htmlFor="input-coin">
        Moeda
        <select
          name="currency"
          value={ currency }
          onChange={ setCurrency }
          id="input-coin"
        >
          {coins.map((coin) => (
            <option value={ coin } key={ coin }>
              {coin}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="input-method">
        Método de pagamento
        <select value={ method } onChange={ setMethod } name="method" id="input-method">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de débito">Cartão de débito</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
        </select>
      </label>
      <label htmlFor="input-tag">
        Tag
        <select value={ tag } onChange={ setTag } name="tag" id="input-tag">
          <option value="Lazer">Lazer</option>
          <option value="Alimentação">Alimentação</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    </div>
  );
}

Select.propTypes = {
  tag: PropTypes.string.isRequired,
  setMethod: PropTypes.func.isRequired,
  setTag: PropTypes.func.isRequired,
  setCurrency: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  coins: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Select;
