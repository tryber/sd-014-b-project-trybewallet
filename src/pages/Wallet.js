import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input_Text from '../components/Input_Text';
import Select_Component from '../components/Select_Component';
import { requestCurrencies, fetchApiExchange } from '../actions';

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
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const { getCurrencies } = this.props;
    const patch = 'https://economia.awesomeapi.com.br/json/all';
    const fetchApi = await fetch(patch);
    const result = await fetchApi.json();
    const filterCurrencies = Object.keys(result).
      filter((currencie) => currencie !== 'USDT');
    getCurrencies(filterCurrencies);
  }

  handleChange( {target} ) {
    const { name, value } = target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    const { getExpensives } = this.props;
    event.preventDefault();
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }))
    getExpensives(this.state);

    this.setState({ 
      value: '', 
      description: '', 
      currency: '', 
      method: '', 
      tag: '' })
  }

  getTotalExpensives() {
    const { expensives } = this.props;
    if (expensives.length !== 0) {
      const total = expensives.reduce((acc, currentValue) => (
        acc + currentValue.value * currentValue.exchangeRates[currentValue.currency].ask
      ), 0);
      return total.toFixed(2);
    }
    return 0;
  }

  render() {
    const { getEmail, currenciesOptions } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const paymentsOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagsOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <>
        <header>
          <p data-testid="email-field">{ getEmail }</p>
          <p data-testid="total-field">{ this.getTotalExpensives() }</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
       <form>
         <Input_Text
           label="Valor" 
           value={ value }
           id="value"
           name="value"
           onChange={ this.handleChange } 
         />
         <Input_Text
           label="Descrição" 
           value={ description }
           id="description"
           name="description"
           onChange={ this.handleChange } 
         />
         <Select_Component
           label="Moeda"
           value={ currency } 
           id="currency"
           name="currency"
           onChange={ this.handleChange }
           options={ currenciesOptions }
         />
         <Select_Component
           label="Método de pagamento"
           value={ method } 
           id="method"
           name="method"
           onChange={ this.handleChange }
           options={ paymentsOptions }
         />
         <Select_Component
           label="Tag"
           value={ tag } 
           id="tag"
           name="tag"
           onChange={ this.handleChange }
           options={ tagsOptions }
         />
         <button 
           type="button"
           onClick={ this.handleSubmit }
         > 
           Adicionar despesa
         </button>
       </form>
      </>
      
    )
  }
}


const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  currenciesOptions: state.wallet.currencies,
  expensives: state.wallet.expenses,
})

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: (payload) => dispatch(requestCurrencies(payload)),
  getExpensives: (state) => dispatch(fetchApiExchange(state)),
})

Wallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  currenciesOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  getExpensives: PropTypes.func.isRequired,
  expensives: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
