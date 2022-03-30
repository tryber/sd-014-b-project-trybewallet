import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency, walletExpensesValue } from '../actions';
import InputWallet from './InputWallet';
import SelectWallet from './SelectWallet';

class InsertForm extends Component {
  tag = 'Alimentação';

  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: this.tag,
    };
  }

  componentDidMount() {
    const { dispatchWalletApi } = this.props;
    dispatchWalletApi();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick = async (e) => {
    e.preventDefault();
    const { id, value, description, currency, method, tag } = this.state;
    const { submitState } = this.props;

    const getCurrenciesApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const exchangeRates = await getCurrenciesApi.json();

    this.setState((prevState) => ({ id: prevState.id + 1 }));
    submitState({ value, description, exchangeRates, id, currency, method, tag });
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: this.tag,
    });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    const filterCurrency = currencies.filter((item) => item !== 'USDT');
    const paymentMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <span className="input-info-wallet">
        <InputWallet
          label="Valor: "
          type="text"
          value={ value }
          name="value"
          id="valor"
          onChange={ this.handleChange }
        />
        <InputWallet
          label="Descrição: "
          type="text"
          name="description"
          id="description"
          value={ description }
          onChange={ this.handleChange }
        />
        <SelectWallet
          label="Moeda: "
          id="currency"
          value={ currency }
          onChange={ this.handleChange }
          options={ filterCurrency }
        />
        <SelectWallet
          label="Método de pagamento: "
          id="method"
          value={ method }
          onChange={ this.handleChange }
          options={ paymentMethod }
        />
        <SelectWallet
          label="Tag: "
          id="tag"
          value={ tag }
          onChange={ this.handleChange }
          options={ tags }
        />
        <button type="button" onClick={ this.handleClick }>Adicionar Despesas</button>
      </span>
    );
  }
}

InsertForm.propTypes = {
  dispatchWalletApi: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  submitState: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchWalletApi: () => dispatch(fetchCurrency()),
  submitState: (expenses) => dispatch(walletExpensesValue(expenses)),
}
);

const mapStateToProps = ({ user, wallet }) => (
  {
    email: user.email,
    currencies: wallet.currencies,
    expenses: wallet.expenses,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(InsertForm);
