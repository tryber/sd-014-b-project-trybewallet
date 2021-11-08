import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tags from './tags';
import { fetchExpenses } from '../actions';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.setState({
      [id]: value,
    });
  }

  async submit() {
    const { sendExpenses } = this.props;
    this.setState((prevState) => ({ id: prevState.id + 1 }));
    await sendExpenses(this.state);
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  render() {
    const { moedas } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="text" id="value" value={ value } onChange={ this.handleChange } />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            onChange={ this.handleChange }
            value={ currency }
          >
            {moedas.map((coins) => (
              <option key={ coins }>
                {coins}
              </option>))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select id="method" value={ method } onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <Tags handle={ this.handleChange } tag={ tag } />
        <button type="button" onClick={ this.submit }>adicionar despesa</button>
      </form>

    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  sendExpenses: (state) => dispatch(fetchExpenses(state)),
});

Form.propTypes = {
  moedas: PropTypes.arrayOf(PropTypes.any).isRequired,
  sendExpenses: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Form);
