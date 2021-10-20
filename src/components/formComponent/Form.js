import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { va, desc, curr, met, tag, onC, coins, addE } = this.props;
    return (
      <>
        <form>
          <label htmlFor="valor">
            Valor
            <input type="number" id="valor" value={ va } onChange={ onC } />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea type="textbox" value={ desc } onChange={ onC } id="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency" value={ curr } onChange={ onC }>
              {coins.map((coin) => (
                <option key={ coin } value={ coin }>{ coin }</option>))}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento
            <select id="method" defaultValue={ met } onChange={ onC }>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag" value={ tag } onChange={ onC }>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </form>
        <button type="button" onClick={ addE }>Adicionar despesa</button>
      </>
    );
  }
}

Form.propTypes = {
  va: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  curr: PropTypes.string.isRequired,
  met: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  coins: PropTypes.arrayOf(PropTypes.string).isRequired,
  onC: PropTypes.func.isRequired,
  addE: PropTypes.func.isRequired,
};

export default Form;
