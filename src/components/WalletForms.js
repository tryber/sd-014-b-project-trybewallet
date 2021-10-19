import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencyAPI, expensesAPI } from '../actions';

class WalletForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.renderValue = this.renderValue.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.renderCurrency = this.renderCurrency.bind(this);
    this.renderPayment = this.renderPayment.bind(this);
    this.renderTag = this.renderTag.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getWalletData } = this.props;
    getWalletData();
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSubmit() {
    const { dispatchExpenses, expense } = this.props;
    dispatchExpenses(this.state, expense.length);

    this.setState({
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    });
  }

  renderValue() {
    const { value } = this.state;
    return (
      <label htmlFor="expenses">
        Valor
        <input
          type="number"
          name="value"
          id="expenses"
          value={ value }
          onChange={ this.handleChange }
          placeholder="Expenses"
        />
      </label>

    );
  }

  renderDescription() {
    const { description } = this.state;
    return (
      <label htmlFor="Description">
        Descrição
        <input
          type="text"
          name="description"
          id="Description"
          value={ description }
          onChange={ this.handleChange }
          placeholder="Description"
        />
      </label>
    );
  }

  renderCurrency() {
    const { getDataCurrencies } = this.props;
    const { currency } = this.state;
    return (
      <label htmlFor="currency">
        Moeda
        <select
          name="currency"
          id="currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          { getDataCurrencies.map((currencies, index) => (
            <option
              key={ index }
              value={ currencies }
            >
              { currencies }
            </option>
          )) }
        </select>
      </label>
    );
  }

  renderPayment() {
    const { method } = this.state;
    return (
      <label htmlFor="Method">
        Método de Pagamento
        <select
          name="method"
          id="Method"
          value={ method }
          onChange={ this.handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTag() {
    const { tag } = this.state;
    return (
      <label htmlFor="Tag">
        Tag
        <select
          name="tag"
          id="Tag"
          value={ tag }
          onChange={ this.handleChange }
          placeholder="Tag"
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form>
        { this.renderValue() }
        { this.renderDescription() }
        { this.renderCurrency() }
        { this.renderPayment() }
        { this.renderTag() }
        <button
          type="button"
          onClick={ () => this.handleSubmit() }
        >
          Adicionar despesa

        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getWalletData: (state) => dispatch(fetchCurrencyAPI(state)),
  dispatchExpenses: (state, id) => dispatch(expensesAPI(state, id)),
});

const mapStateToProps = (state) => ({
  getDataCurrencies: state.wallet.currencies,
  expense: state.wallet.expenses,
});

WalletForms.propTypes = {
  getWalletData: PropTypes.func.isRequired,
  getDataCurrencies: PropTypes.shape().isRequired,
  dispatchExpenses: PropTypes.func.isRequired,
  expense: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForms);
