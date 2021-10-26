import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { getCurrenciesApiThunk } from '../actions/currencies';
import Select from '../components/Select';
import Input from '../components/Input';

const payments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      currency: '',
      expense: '',
      description: '',
      payment: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  renderInputs() {
    const { expense, description } = this.state;
    return (
      <>
        <Input
          nameLabel="Valor"
          type="number"
          id="expense"
          name="expense"
          value={ expense }
          onChange={ this.handleChange }
        />
        <Input
          nameLabel="Descrição"
          type="text"
          id="description"
          name="description"
          placeholder="Descrição da despesa"
          value={ description }
          onChange={ this.handleChange }
        />
      </>
    );
  }

  render() {
    const { currency, tag, payment } = this.state;
    const { currencies, isLoading } = this.props;
    return isLoading ? <Header />
      : (
        <>
          <Header />
          <form>
            {this.renderInputs()}
            <Select
              nameLabel="Moedas"
              id="currencies"
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
              arrOptions={ currencies }
              defaultOption=""
            />
            <Select
              nameLabel="Método de pagamento"
              id="payment"
              name="payment"
              value={ payment }
              onChange={ this.handleChange }
              arrOptions={ payments }
              defaultOption="Pagamento"
            />
            <Select
              nameLabel="Tag"
              id="tag"
              name="tag"
              value={ tag }
              onChange={ this.handleChange }
              arrOptions={ tags }
              defaultOption="Tag"
            />
          </form>
        </>
      );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isLoading: state.wallet.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(getCurrenciesApiThunk()),
});

Wallet.propTypes = {
  currencies: PropTypes.array,
  isLoading: PropTypes.bool,
  setCurrencies: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
