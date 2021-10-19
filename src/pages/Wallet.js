import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input_Text from '../components/Input_Text';
import Select_Component from '../components/Select_Component';
import { requestCurrencies } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      total_expensive: 0,
      value: '',
      description: '',
      currencie: '',
      payment: '',
      tag: '',
    }

    this.handleChange = this.handleChange.bind(this);
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

  render() {
    const { getEmail, currenciesOptions } = this.props;
    const { total_expensive, value, description, currencie, payment, tag } = this.state;
    const paymentsOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagsOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <>
        <header>
          <p data-testid="email-field">{ getEmail }</p>
          <p data-testid="total-field">{ `Despesa Total: ${ total_expensive }` }</p>
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
           value={ currencie } 
           id="currencie"
           name="currencie"
           onChange={ this.handleChange }
           options={ currenciesOptions }
         />
         <Select_Component
           label="Método de pagamento"
           value={ payment } 
           id="payment"
           name="payment"
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
       </form>
      </>
      
    )
  }
}


const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  currenciesOptions: state.wallet.currencies,
})

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: (payload) => dispatch(requestCurrencies(payload))
})

Wallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  currenciesOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
