import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input_Text from '../components/Input_Text';
import Select_Component from '../components/Select_Component';
import { requestCurrencies, fetchApiExchange, delExpensive } from '../actions';

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
    };

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
    });
  }

  handleSubmit(event) {
    const { getExpensives } = this.props;
    event.preventDefault();
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
    getExpensives(this.state);

    this.setState({ 
      value: '', 
      description: '', 
      currency: '', 
      method: '', 
      tag: '' });
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

  getExchangeValue(obj) {
    return obj.exchangeRates[obj.currency].ask;
  }

  getConversion(obj) {
    return parseFloat(obj.value) * 
      parseFloat(obj.exchangeRates[obj.currency].ask);
  }

  render() {
    const { getEmail, currenciesOptions, expensives, delSpent } = this.props;
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
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expensives.map((expensive, index) => {
              const exchangeValue = this.getExchangeValue(expensive);
              const convertedValue = this.getConversion(expensive);
              return(
                <tr key={ index }>
                  <td>{ expensive.description }</td>
                  <td>{ expensive.tag }</td>
                  <td>{ expensive.method }</td>
                  <td>{ expensive.value }</td>
                  <td>{ expensive.exchangeRates[expensive.currency].
                    name.split('/')[0] }
                  </td>
                  <td>{ parseFloat(exchangeValue).toFixed(2) }</td>
                  <td>{ convertedValue.toFixed(2) }</td>
                  <td>Real</td>
                  <td>
                    <button
                      type="button"
                      data-testid="delete-btn"
                      onClick={ () => delSpent(expensive.id) }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              );
            }  
            )}
          </tbody>  
        </table>
      </>
      
    );
  }
}


const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  currenciesOptions: state.wallet.currencies,
  expensives: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: (payload) => dispatch(requestCurrencies(payload)),
  getExpensives: (state) => dispatch(fetchApiExchange(state)),
  delSpent: (value) => dispatch(delExpensive(value)),
});

Wallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  currenciesOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  getExpensives: PropTypes.func.isRequired,
  expensives: PropTypes.array.isRequired,
  delSpent: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
