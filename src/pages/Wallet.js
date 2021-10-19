import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      total: 0,
    };

    this.renderExpensesForm1 = this.renderExpensesForm1.bind(this);
    this.renderExpensesForm2 = this.renderExpensesForm2.bind(this);
  }

  async componentDidMount() {
    const { fetchCurrenciesData } = this.props;
    const data = await fetchCurrenciesData();
    console.log(data);
  }

  renderExpensesForm1() {
    // const { currenciesData } = this.props;
    return (
      <div>
        <label htmlFor="expense-value">
          Valor
          <input
            type="number"
            id="expense-value"
            name="value"
          // value={}
          // onChange={}
          />
        </label>
        <label htmlFor="expense-description">
          Descrição
          <input
            type="textarea"
            id="expense-description"
            name="description"
          // value={}
          // onChange={}
          />
        </label>
        <label htmlFor="currency-type">
          Moeda
          {/* <select id="currency-type">
            { currenciesData.map((currency, i) => (
              <option key={ i } value={ currency.code }>{ currency.code }</option>)) }
          </select> */}
        </label>
      </div>
    );
  }

  renderExpensesForm2() {
    return (
      <div>
        <label htmlFor="payment-method">
          Método de pagamento
          <select id="payment-method">
            <option value="money">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expense-tag">
          Tag
          <select id="expense-tag">
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transportation">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </div>
    );
  }

  render() {
    const { total, currency } = this.state;
    const { userEmail } = this.props;
    return (
      <main>
        <header>
          <h3 data-testid="email-field">{ userEmail }</h3>
          <h3 data-testid="total-field">{ `Despesa total: ${total}` }</h3>
          <h3 data-testid="header-currency-field">{ currency }</h3>
        </header>
        <section>
          <form>
            { this.renderExpensesForm1() }
            { this.renderExpensesForm2() }
          </form>
        </section>
      </main>
    );
  }
}

Wallet.propTypes = {
  currenciesData: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  fetchCurrenciesData: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.loginEmailReducer.user.email,
  currenciesData: state.fetchCurrenciesReducer.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrenciesData: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
