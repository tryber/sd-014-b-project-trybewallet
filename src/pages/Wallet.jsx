import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { getCurrenciesApiThunk } from '../actions/currencies';
import { getExpensesApiThunk } from '../actions/expenses';
import Select from '../components/form/Select';
import Input from '../components/form/Input';
import Button from '../components/form/Button';
import Table from '../components/form/Table';

const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  handleChange({ target: { id, value } }) {
    this.setState((state) => ({
      ...state,
      [id]: value,
    }));
  }

  async handleClick() {
    const { setExpenses } = this.props;
    setExpenses(this.state);
    this.setState((state) => ({
      ...state,
      id: state.id + 1,
      value: 0,
      description: '',
    }));
  }

  renderInputs() {
    const { value, description } = this.state;
    return (
      <>
        <Input
          label="Valor"
          type="number"
          id="value"
          value={ value }
          onChange={ this.handleChange }
        />
        <Input
          label="Descrição"
          id="description"
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
          id="currency"
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
    return (
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
          <Table />
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(getCurrenciesApiThunk()),
  setExpenses: (state) => dispatch(getExpensesApiThunk(state)),
});

Wallet.propTypes = {
  currencies: PropTypes.array,
  setCurrencies: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
