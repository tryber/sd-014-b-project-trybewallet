import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions/index';

class Wallet extends React.Component {
  constructor() {
    super();
    this.setCurrency = this.setCurrency.bind(this);
    this.state = {
      currencies: [],
    };
  }

  componentDidMount() {
    this.setCurrency();
  }

  async setCurrency() {
    const { fetchInfo } = this.props;
    const requestedInfo = await fetchInfo();
    const initials = Object.keys(requestedInfo.payload);
    this.setState({
      currencies: initials.filter((e) => e !== 'USDT'),
    });
  }

  render() {
    const { user: { email }, wallet: { expenses } } = this.props;
    const { currencies } = this.state;
    const payment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const genre = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <div>
        <header>
          <h1>TrybeWallet</h1>
          <h5 data-testid="email-field">{ email }</h5>
          <h5 data-testid="total-field">{ !expenses.length ? 0 : expenses }</h5>
          <h5 data-testid="header-currency-field">BRL</h5>
        </header>
        <form>
          <label htmlFor="value">
            Valor:
            <input type="text" name="value" id="value" />
          </label>
          <label htmlFor="description">
            Descrição:
            <input type="text" name="description" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select type="text" name="currency" id="currency">
              { currencies.map((e, index) => <option key={ index }>{ e }</option>) }
            </select>
          </label>
          <label htmlFor="method">
            Método de Pagamento:
            <select name="method" id="method">
              { payment.map((e, index) => <option key={ index }>{ e }</option>) }
            </select>
          </label>
          <label htmlFor="genre">
            Tag:
            <select name="genre" id="genre">
              { genre.map((e, index) => <option key={ index }>{ e }</option>) }
            </select>
          </label>
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
  wallet: PropTypes.shape({
    expenses: PropTypes.element,
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  fetchInfo: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
