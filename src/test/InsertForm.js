import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrenciesDataThunk, setWalletData } from '../actions';
import Select from '../interactionComponents/Select';
import { methods, tags } from '../data/ExpensesFormData';
import MapCurrencies from './MapCurrencies';
import Input from '../interactionComponents/Input';
import AddExpenseButton from '../interactionComponents/AddExpenseButton';

class InsertForm extends Component {
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
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { dispatchWalletApi } = this.props;
    dispatchWalletApi();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async handleClick() {
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
    const { currenciesProps } = this.props;
    const filterCurrency = currenciesProps.filter((item) => item !== 'USDT');

    return (
      <span className="input-info-wallet">
        <Input
          label="Valor: "
          type="number"
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
        <MapCurrencies
          label="Moeda: "
          id="currency"
          value={ currency }
          onChange={ this.handleChange }
          dataArray={ filterCurrency }
        />
        <Select
          label="Método de pagamento"
          name="method"
          value={ method }
          handleChange={ this.handleChange }
          dataArray={ methods }
        />
        <Select
          label="Tag"
          name="tag"
          value={ tag }
          handleChange={ this.handleChange }
          dataArray={ tags }
        />
        <AddExpenseButton click={ this.handleClick } />
      </span>
    );
  }
}

InsertForm.propTypes = {
  dispatchWalletApi: PropTypes.func.isRequired,
  currenciesProps: PropTypes.arrayOf(PropTypes.any).isRequired,
  submitState: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchWalletApi: () => dispatch(getCurrenciesDataThunk()),
  submitState: (expenses) => dispatch(setWalletData(expenses)),
}
);

const mapStateToProps = ({ user, wallet }) => (
  {
    emailProps: user.email,
    currenciesProps: wallet.currencies, // currenciesData vai receber o estado do reducer wallet
    expenses: wallet.expenses,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(InsertForm);
