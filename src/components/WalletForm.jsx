import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DefaultInput from './DefaultInput';
import DefaultSelect from './DefaultSelect';

class WalletForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: '',
      tag: '',
      method: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.filterAPI = this.filterAPI.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
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
        <button type="button">Adicionar Despesa</button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
