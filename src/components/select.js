import PropTypes from 'prop-types';
import React from 'react';

export default class Select extends React.Component {
  render() {
    const { currencies, handleChange, exchange, method, tag } = this.props;
    return (
      <div>
        <form className="form-2">
          <label htmlFor="exchange">
            Moeda:
            <select
              id="exchange"
              name="currency"
              value={ exchange }
              onChange={ handleChange }
            >
              {currencies.map((currency, index) => (
                <option key={ index }>
                  {currency}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento:
            <select
              id="method"
              name="method"
              onChange={ handleChange }
              value={ method }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag" name="tag" value={ tag } onChange={ handleChange }>
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

Select.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  exchange: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};
