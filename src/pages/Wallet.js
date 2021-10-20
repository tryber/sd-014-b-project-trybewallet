import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import InputComponent from '../components/InputComponent';
import SelectComponent from '../components/SelectComponent';
import { currenciesAction, expensesAction, editedExpensesAction } from '../actions';
import TableComponent from '../components/TableComponent';
import ButtonComponent from '../components/ButtonComponent';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: [],
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Trabalho',
      exchangeRates: [],
    };
    this.fetchApi = this.fetchApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.expenseEditState = this.expenseEditState.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const { dispatchCurrienciesToGlobal } = this.props;
    try {
      const urlPatch = 'https://economia.awesomeapi.com.br/json/all';
      const fetchApi = await fetch(urlPatch);
      const returnApi = await fetchApi.json();
      const currencies = Object.keys(returnApi).filter((code) => code !== 'USDT');
      dispatchCurrienciesToGlobal(currencies);
      this.setState({
        exchangeRates: returnApi,
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  handleClick() {
    this.fetchApi();
    const { dispatchExpensesToGlobal, expenses } = this.props;
    dispatchExpensesToGlobal({
      ...this.state,
      id: expenses.length,
    });

    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Trabalho',
    });
  }

  expenseEditState() {
    const { expenseEdit } = this.props;
    this.setState({
      id: expenseEdit.id,
      value: expenseEdit.value,
      description: expenseEdit.description,
      currency: expenseEdit.currency,
      method: expenseEdit.method,
      tag: expenseEdit.tag,
      exchangeRates: expenseEdit.exchangeRates,
      editing: true,
    });
  }

  saveEdit() {
    const { expenses, expenseEdit, dispatchEdited } = this.props;
    expenses.splice([expenseEdit.id], 1, this.state);
    dispatchEdited(expenses);
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Trabalho',
      editing: false,
    });
  }

  render() {
    const { currenciesInfo } = this.props;
    const { value, description, currency, method, tag, editing } = this.state;
    const methodMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <>
        <Header />
        <form>
          <InputComponent
            value={ value }
            type="number"
            onChange={ this.handleChange }
            label="Valor"
            id="value"
          />
          <InputComponent
            value={ description }
            onChange={ this.handleChange }
            label="Descrição"
            id="description"
          />
          <SelectComponent
            value={ currency }
            onChange={ this.handleChange }
            label="Moeda"
            id="currency"
            options={ currenciesInfo }
          />
          <SelectComponent
            value={ method }
            onChange={ this.handleChange }
            label="Método de pagamento"
            id="method"
            options={ methodMethods }
          />
          <SelectComponent
            value={ tag }
            onChange={ this.handleChange }
            label="Tag"
            id="tag"
            options={ tags }
          />
          {editing ? <ButtonComponent onClick={ this.saveEdit } text="Editar despesa" />
            : <ButtonComponent onClick={ this.handleClick } text="Adicionar despesa" />}
        </form>
        <TableComponent expenseEditState={ this.expenseEditState } />
      </>
    );
  }
}

Wallet.propTypes = {
  dispatchCurrienciesToGlobal: PropTypes.func.isRequired,
  currenciesInfo: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatchExpensesToGlobal: PropTypes.func.isRequired,
  dispatchEdited: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  expenseEdit: PropTypes.shape({
    id: PropTypes.arrayOf(PropTypes.object),
    value: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    exchangeRates: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};

Wallet.defaultProps = {
  expenseEdit: {
    id: [],
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Trabalho',
    exchangeRates: [],
  },
};

const mapStateToProps = (state) => ({
  currenciesInfo: state.wallet.currencies,
  expenses: state.wallet.expenses,
  expenseEdit: state.wallet.expenseEdit,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrienciesToGlobal: (currencies) => dispatch(currenciesAction(currencies)),
  dispatchExpensesToGlobal: (expense) => dispatch(expensesAction(expense)),
  dispatchEdited: (editedExpenses) => dispatch(editedExpensesAction(editedExpenses)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
