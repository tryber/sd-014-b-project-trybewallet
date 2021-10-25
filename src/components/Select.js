import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { onChange, tag, method, currency, coins } = this.props;
    return (
      <div>
        <label htmlFor="input-coin">
          Moeda
          <select
            name="currency"
            value={ currency }
            onChange={ onChange }
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
          <select value={ method } onChange={ onChange } name="method" id="input-method">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de débito">Cartão de débito</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
          </select>
        </label>
        <label htmlFor="input-tag">
          Tag
          <select value={ tag } onChange={ onChange } name="tag" id="input-tag">
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
}

Select.propTypes = {
  tag: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  coins: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Select;
