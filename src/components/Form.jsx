import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrenciesAction, setExpenses } from '../actions';

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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  handleSubmit() {
    const { sendExpenses, fetchCurrency } = this.props;
    fetchCurrency();
    sendExpenses(this.state);
    this.setState((preventState) => ({
      id: preventState.id + 1,
    }));
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value });
  }

  render() {
    const { arrayCurrencies } = this.props;
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
          <select id="currency" value={ currency } onChange={ this.handleChange }>
            { arrayCurrencies.map(
              (element) => <option key={ element } value={ element }>{ element }</option>,
            )}
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
        <label htmlFor="tag">
          Tag:
          <select id="tag" value={ tag } onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.handleSubmit }>Adicionar Despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  arrayCurrencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchCurrenciesAction()),
  sendExpenses: (state) => dispatch(setExpenses(state)) });

Form.propTypes = {
  arrayCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchCurrency: PropTypes.func.isRequired,
  sendExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
