import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestCurrencies, delExpensive, 
  initUpdate} from '../actions';

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

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  async componentDidMount() {
    const { getCurrencies } = this.props;
    const patch = 'https://economia.awesomeapi.com.br/json/all';
    const fetchApi = await fetch(patch);
    const result = await fetchApi.json();
    const filterCurrencies = Object.keys(result)
      . filter((currencie) => currencie !== 'USDT');
    getCurrencies(filterCurrencies);
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

  getEditExpense(expensive) {
    const { initUpdate } = this.props;
    initUpdate(expensive);
    this.setState({ 
      value: expensive.value, 
      description: expensive.description, 
      currency: expensive.currency, 
      method: expensive.method, 
      tag: expensive.tag });
  }

  renderHeader() {
    const { getEmail } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ getEmail }</p>
        <p data-testid="total-field">{ this.getTotalExpensives() }</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }

  renderBodyTable() {
    const { expensives, delSpent } = this.props;
    return (
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
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => this.getEditExpense(expensive) }
                >
                  Editar
                </button>
              </td>
            </tr>
          );
        }  
        )}
      </tbody>  
    );
  }

  render() {
    return (
      <>
        { this.renderHeader() }
        { this.renderForm() }
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
          {this.renderBodyTable() }
        </table>
      </>
      
    );
  }
}


const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  expensives: state.wallet.expenses,
  editExpense: state.wallet.editExpense,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: (payload) => dispatch(requestCurrencies(payload)),
  delSpent: (value) => dispatch(delExpensive(value)),
  initUpdate: (payload) => dispatch(initUpdate(payload)),
});

Wallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  expensives: PropTypes.arrayOf(PropTypes.any).isRequired,
  delSpent: PropTypes.func.isRequired,
  initUpdate: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
