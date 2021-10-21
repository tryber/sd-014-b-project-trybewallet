import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DefaultInput from './DefaultInput';
import DefaultSelect from './DefaultSelect';
import * as walletActions from '../actions/walletActions';

class WalletForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      tag: '',
      method: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.filterAPI = this.filterAPI.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  async handleSubmit() {
    const { customProp } = this.props;
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const exchangeRates = await response.json();
    customProp({ ...this.state, exchangeRates });
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
  }

  filterAPI() {
    const { currencies } = this.props;
    return Object.keys(currencies).filter(
      (currency) => currency !== 'USDT',
    );
  }

  render() {
    const { value, description, currency, tag, method } = this.state;
    const filteredCurrencies = this.filterAPI();
    return (
      <form>
        <DefaultInput
          label="Valor"
          id="value"
          handleChange={ this.handleChange }
          value={ value }
        />
        <DefaultInput
          label="Descrição"
          id="description"
          handleChange={ this.handleChange }
          value={ description }
        />
        <DefaultSelect
          label="Moeda"
          id="currency"
          handleChange={ this.handleChange }
          value={ currency }
          options={ filteredCurrencies }
        />
        <DefaultSelect
          label="Método de pagamento"
          id="method"
          handleChange={ this.handleChange }
          value={ method }
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
        />
        <DefaultSelect
          label="Tag"
          id="tag"
          handleChange={ this.handleChange }
          value={ tag }
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
        />
        <button type="button" onClick={ this.handleSubmit }>Adicionar Despesa</button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.objectOf(PropTypes.any).isRequired,
  customProp: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  customProp: (state) => dispatch(walletActions.addExpense(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
