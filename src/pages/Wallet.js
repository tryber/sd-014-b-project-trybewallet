import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import expenseAPI from '../services/ExpenseAPI';
import { fetchCurrenciesAction } from '../actions/apiAction';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      APIresult: [],
    };

    this.getAPIresult = this.getAPIresult.bind(this);
  }

  componentDidMount() {
    this.getAPIresult();
  }

  async getAPIresult() {
    const result = await expenseAPI();
    console.log(result);
    this.setState({
      APIresult: result.filter((currency) => currency !== 'USDT'),
    });
  }

  render() {
    const { APIresult } = this.state;
    const { email } = this.props;
    return (
      <div>
        <header>
          <h4 data-testid="email-field">{email}</h4>
          <h4 data-testid="total-field">0</h4>
          <h4 data-testid="header-currency-field">BRL</h4>
        </header>
        <form>
          <label htmlFor="value">
            Valor:
            <input id="value" type="text" name="name" />
          </label>
          <label htmlFor="description">
            Descrição:
            <input id="description" type="text" name="name" />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select id="currency">
              { APIresult.map((coin, index) => (
                <option key={ index }>{ coin }</option>
              )) }
            </select>
          </label>
          <label htmlFor="payment">
            Método de Pagamento:
            <select id="payment">
              Método de Pagamento
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="expense">
            Tag:
            <select id="expense">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  fetchApi: () => dispatch(fetchCurrenciesAction()),
});

Wallet.propTypes = {
  email: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
