import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchCurrency from '../service';

function CurrencyLabel({ currency, setCurrency }) {
  const [currencyOptions, setCurrencyOptions] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await await fetchCurrency();
      delete result.USDT;
      const resultArray = Object.keys(result);
      setCurrencyOptions(resultArray);
    })();
  }, []);

  return (
    <label htmlFor="currency">
      <select
        value={ currency }
        onChange={ ({ target }) => setCurrency(target.value) }
        id="currency"
      >
        {currencyOptions.map((coin) => (
          <option value={ coin } key={ coin }>
            {coin}
          </option>
        ))}
      </select>
      Moeda
    </label>
  );
}

CurrencyLabel.propTypes = {
  currency: PropTypes.string.isRequired,
  setCurrency: PropTypes.func.isRequired,
};

export default CurrencyLabel;
