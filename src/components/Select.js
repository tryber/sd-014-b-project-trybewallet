import React from 'react';
import { Select as Selector, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';

function Select({ setTag, setMethod, setCurrency, tag, method, currency, coins }) {
  return (
    <div className="select">
      <Selector
        label="Moeda"
        name="currency"
        value={ currency }
        onChange={ setCurrency }
        id="input-coin"
      >
        {coins.map((coin) => (
          <MenuItem value={ coin } key={ coin }>
            {coin}
          </MenuItem>
        ))}
      </Selector>
      <Selector value={ method } onChange={ setMethod } name="method" id="input-method">
        <MenuItem value="Dinheiro">Dinheiro</MenuItem>
        <MenuItem value="Cartão de débito">Cartão de débito</MenuItem>
        <MenuItem value="Cartão de crédito">Cartão de crédito</MenuItem>
      </Selector>
      <Selector value={ tag } onChange={ setTag } name="tag" id="input-tag">
        <MenuItem value="Lazer">Lazer</MenuItem>
        <MenuItem value="Alimentação">Alimentação</MenuItem>
        <MenuItem value="Trabalho">Trabalho</MenuItem>
        <MenuItem value="Transporte">Transporte</MenuItem>
        <MenuItem value="Saúde">Saúde</MenuItem>
      </Selector>
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
