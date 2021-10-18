import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';
import Input from '../components/Input';
import Select from '../components/Select';

class Wallet extends Component {
  constructor() {
    super();

    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      expenses: 0,
      actualCurrency: 'BRL',
    };
  }

  componentDidMount() {
    const { fetchCurrenciesToProps } = this.props;
    fetchCurrenciesToProps();
  }

  handleInputChange() {

  }

  render() {
    const { userEmail, walletCurrencies } = this.props;
    const payMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { expenses, actualCurrency } = this.state;
    return (
      <section>
        <header>
          <span data-testid="email-field">{ userEmail }</span>
          <span data-testid="total-field">{ expenses }</span>
          <span data-testid="header-currency-field">{ actualCurrency }</span>
        </header>
        <form>
          <Input
            type="text"
            name="valor"
            labelText="Valor"
          />
          <Input
            type="text"
            name="description"
            labelText="Descrição"
          />
          <Select
            labelText="Moeda"
            options={ walletCurrencies.filter((currency) => currency !== 'USDT') }
          />
          <Select
            labelText="Método de pagamento"
            options={ payMethods }
          />
          <Select
            labelText="Tag"
            options={ tags }
          />
          <button type="button">Adicionar despesa</button>
        </form>
      </section>
    );
  }
}

Wallet.propTypes = {
  fetchCurrenciesToProps: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
  walletCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  walletCurrencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrenciesToProps: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
