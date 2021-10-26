import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { getCurrenciesApiThunk } from '../actions/currencies';
import { addDataExpenses } from '../actions/expenses';
import Select from '../components/form/Select';
import Input from '../components/form/Input';
import Button from '../components/form/Button';
import { getExpenses } from '../services';

const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  handleChange({ target: { name, value } }) {
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  }

  async handleClick() {
    const { setExpenses } = this.props;
    const exchangeRates = await getExpenses();
    this.setState((state) => ({
      ...state,
      exchangeRates,
      // id: state.id + 1,
    }));
    setExpenses(this.state);
    this.setState((state) => ({
      ...state,
      id: state.id + 1,
    }));
  }

  renderInputs() {
    const { value, description } = this.state;
    return (
      <>
        <Input
          nameLabel="Valor"
          type="number"
          id="value"
          name="value"
          value={ value }
          onChange={ this.handleChange }
          placeholder="Valor da despesa"
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

  renderSelects() {
    const { currency, tag, method } = this.state;
    const { currencies } = this.props;
    return (
      <>
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
          id="method"
          name="method"
          value={ method }
          onChange={ this.handleChange }
          arrOptions={ methods }
          defaultOption=""
        />
        <Select
          nameLabel="Tag"
          id="tag"
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
          arrOptions={ tags }
          defaultOption=""
        />
      </>
    );
  }

  render() {
    const { isLoading } = this.props;
    return isLoading ? <Header />
      : (
        <>
          <Header />
          <main>
            <form>
              {this.renderInputs()}
              {this.renderSelects()}
              <Button
                nameLabel="Adicionar despesa"
                onClick={ this.handleClick }
              />
            </form>
          </main>
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
  setExpenses: (expenses) => dispatch(addDataExpenses(expenses)),
});

Wallet.propTypes = {
  currencies: PropTypes.array,
  isLoading: PropTypes.bool,
  setCurrencies: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
