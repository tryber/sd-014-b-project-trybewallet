import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { EXPENSE_DISPATCH, LOAD_CURRENCIES } from '../actions';
import ExpensesTable from '../components/ExpensesTable';
import Header from '../components/Header';
import InputLabel from '../components/InputLabel';
import SelectLabel from '../components/SelectLabel';
import DATA from '../data';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleEntries = ({ target: { name, value } }) => this.setState({ [name]: value });

  render() {
    const { hasCurrencies, currencies, expenses, submitExpense } = this.props;
    return (
      <div>
        <Header />
        <form>
          <InputLabel value="value" name="Valor" callbackFunc={ this.handleEntries } />
          <SelectLabel
            value="currency"
            name="Moeda"
            callbackFunc={ this.handleEntries }
            isLoaded={ hasCurrencies }
            ITEMS={ currencies }
          />
          <SelectLabel
            value="method"
            name="Método de pagamento"
            callbackFunc={ this.handleEntries }
            ITEMS={ DATA.payment }
          />
          <SelectLabel
            value="tag"
            name="Tag"
            callbackFunc={ this.handleEntries }
            ITEMS={ DATA.tag }
          />
          <InputLabel
            value="description"
            name="Descrição"
            callbackFunc={ this.handleEntries }
          />
          <button
            type="button"
            onClick={ () => submitExpense(expenses, this.state) }
          >
            Adicionar despesa
          </button>
        </form>
        <ExpensesTable />
      </div>);
  }
}

Wallet.propTypes = {
  currencies: PropTypes.arrayOf(String).isRequired,
  expenses: PropTypes.arrayOf(String).isRequired,
  hasCurrencies: PropTypes.bool.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  submitExpense: PropTypes.func.isRequired,
};

function mapState({ wallet: { hasCurrencies, currencies, expenses } }) {
  return { hasCurrencies, currencies, expenses };
}

function mapDispatch(dispatch) {
  return {
    getCurrencies: () => dispatch(LOAD_CURRENCIES()),
    submitExpense: (expense, state) => dispatch(EXPENSE_DISPATCH(expense, state)),
  };
}

export default connect(mapState, mapDispatch)(Wallet);
