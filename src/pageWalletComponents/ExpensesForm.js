import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { methods, tags } from '../data/ExpensesFormData';
import { getCurrenciesDataThunk, setWalletData } from '../actions';
import Input from '../interactionComponents/Input';
import Select from '../interactionComponents/Select';
import AddExpenseButton from '../interactionComponents/AddExpenseButton';
import SelectWallet from './SelectWallet';

class ExpensesForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
  }

  componentDidMount() {
    const { dispatchWalletApi } = this.props;
    dispatchWalletApi();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async handleSubmitButton() {
    const { id, value, description, currency, method, tag } = this.state;
    const { submitState } = this.props;

    const getCurrenciesApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const exchangeRates = await getCurrenciesApi.json();

    this.setState((prevState) => ({ id: prevState.id + 1 }));

    submitState({ value, description, id, currency, method, tag, exchangeRates });
    // subtmitState será um ferramenta para despachar os estados em mapDispatch
    this.setState({
      value: '',
      description: '',
      currency: ' ',
      method: '',
      tag: '',
    });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    const filterCurrency = currencies.filter((item) => item !== 'USDT');
    return (
      <form>
        <Input
          label="Valor: "
          type="number"
          min="0"
          value={ value }
          name="value"
          id="valor"
          onChange={ this.handleChange }
        />
        <Input
          label="Descrição: "
          type="text"
          name="description"
          id="description"
          value={ description }
          onChange={ this.handleChange }
        />

        <Select
          label="Método de pagamento"
          name="method"
          value={ method }
          handleChange={ this.handleChange }
          dataArray={ methods }
        />

        <SelectWallet
          label="Moeda: "
          id="currency"
          value={ currency }
          onChange={ this.handleChange }
          options={ filterCurrency }
        />
        <Select
          label="Tag"
          name="tag"
          value={ tag }
          handleChange={ this.handleChange }
          dataArray={ tags }
        />
        <AddExpenseButton click={ this.handleSubmitButton } />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchWalletApi: () => dispatch(getCurrenciesDataThunk()), // getCurrenciesDataThunk: action
  submitState: (expenses) => dispatch(setWalletData(expenses)), // submitState
}
// o setWalletData recebe um parametro na ação (payload), ou seja, expenses é um objeto de retorno
// para a ação
);
// mapDispatchToProps is used for dispatching actions to the store.
// mapDispatch manda os dados para a store que interage com os reducers

const mapStateToProps = ({ user, wallet }) => ( // recebe as propriedades do estado
  {
    email: user.email, // user e wallet sao os reducers
    currencies: wallet.currencies, // (wallet) este reducer que faz os dados da API "aparecerem"
    expenses: wallet.expenses, // os .x sao os estados de cada reducer
  }
); // receiveCurrenciesData, expenses:, email:

// as acçoes sao aplicadas no reducer e o reducer é chamado aqui para receber as acçoes;
// Redux Thunk is a middleware that allows you to call the action creators that return a function(thunk)
// That function receives the store’s dispatch method, which is then used to dispatch regular synchronous
// actions inside the function’s body once the asynchronous operations have been completed.

ExpensesForm.propTypes = {
  dispatchWalletApi: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  submitState: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
