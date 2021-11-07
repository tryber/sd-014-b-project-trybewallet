import React from 'react';
import PropTypes from 'prop-types';
import Tags from './tags';

class Form extends React.Component {
  render() {
    const { moedas } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="text" id="valor" />
        </label>

        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
          />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select id="currency">
            {moedas.map((coins) => (
              <option key={ coins }>
                {coins}
              </option>))}
          </select>
        </label>

        <label htmlFor="payment">
          Método de pagamento:
          <select id="payment">
            <option value="money">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>
        <Tags />
      </form>

    );
  }
}

Form.propTypes = {
  moedas: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Form;
