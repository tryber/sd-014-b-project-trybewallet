import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pagamento, tag } from '../data';

class Form extends Component {
  render() {
    const { getCurrencies } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input id="valor" name="valor" />
        </label>
        <label htmlFor="desc">
          Descrição
          <input id="desc" name="desc" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" name="moeda">
            {getCurrencies.map(({ code, ask }, index) => (
              <option key={ index } value={ ask }>{code}</option>
            ))}
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select id="pagamento" name="pagemento">
            { pagamento.map((metodo, index) => (
              <option key={ index } value={ metodo }>{metodo}</option>
            )) }
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag">
            {tag.map((value, index) => (
              <option key={ index } value={ value }>{value}</option>
            ))}
          </select>
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  getCurrencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  getCurrencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Form);
