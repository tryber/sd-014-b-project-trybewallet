import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Options from './Option';
import Input from './Input';
import Select from './Select';
import { submitExpenses } from '../actions';

class Formulario extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  submit = async () => {
    const { expensesF } = this.props;
    const { value, description, currency, method, tag } = this.state;

    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const dataCoins = await response.json();

    expensesF({ value, description, currency, method, tag, exchangeRates: dataCoins });
  }

  render() {
    const { coins } = this.props;
    const { value } = this.state;
    return (
      <>
        <form>
          <label htmlFor="Valor">
            Valor
            <input
              type="text"
              value={ value }
              onChange={ this.handleChange }
              name="value"
              id="Valor"
            />
          </label>
          <Input onChange={ this.handleChange } />
          <label htmlFor="Coins">
            Moeda
            <select onChange={ this.handleChange } name="currency" id="Coins">
              { coins.map((element, index) => (<Select
                key={ index }
                Coin={ element }
              />))}
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento
            <select onChange={ this.handleChange } name="method" id="payment">
              <option type="combobox">Dinheiro</option>
              <option type="combobox">Cartão de crédito</option>
              <option type="combobox">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tags">
            Tag
            <select onChange={ this.handleChange } name="tag" id="tags">
              <Options />
            </select>
          </label>
        </form>
        <button onClick={ this.submit } type="button">Adicionar despesa</button>
      </>
    );
  }
}

const mapDispatchToProps = () => (dispatch) => ({
  expensesF: (state) => dispatch(submitExpenses(state)),
});

Formulario.propTypes = {
  expensesF: PropTypes.func.isRequired,
  coins: PropTypes.arrayOf([
    PropTypes.any,
  ]).isRequired,
};

export default connect(null, mapDispatchToProps)(Formulario);
