import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { currency } = this.props;
    return (
      <section>
        <form>
          <label htmlFor="value">
            Valor
            <input type="text" name="value" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" name="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select name="currency" id="currency">
              { currency
                .map((currentCoin, i) => <option key={ i } value={ currentCoin }>{ currentCoin }</option>) }
            </select>
          </label>
          <label htmlFor="payment-method">
            Método de Pagamento
            <select name="payment-method" id="payment-method">
              <option>Dinheiro</option>
              <option>Cartão de Crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select name="tag" id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <label htmlFor="btnAddExpenses">
            <input
              className=""
              type="button"
              name="btnAddExpenses"
              value="Adicionar despesa"
              // onClick={}
            />
          </label>
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  currency: PropTypes.object.isRequired,
};

export default Form;
