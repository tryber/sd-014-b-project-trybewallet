import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Categories from '../Components/Categories';
import PaymentMethod from '../Components/PaymentMethod';
import { currencies } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.fetchCurrencies = this.fetchCurrencies.bind(this);

    this.state = {
      value: '',
      description: '',
      curr: [],
    };
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  async fetchCurrencies() {
    const requestCurr = await fetch('https://economia.awesomeapi.com.br/json/all');
    const resolveCurr = await requestCurr.json();
    const { dispatchCurrencies } = this.props;
    this.setState({ curr: [...Object.values(resolveCurr).slice(0, 1),
      ...Object.values(resolveCurr).slice(2)] });
    const { curr } = this.state;
    dispatchCurrencies(curr);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    const { email } = this.props;
    const { value, description, curr } = this.state;
    return (
      <>
        <header>
          <span data-testid="email-field">{ email }</span>
          <span data-testid="header-currency-field">BRL</span>
          <span data-testid="total-field">0</span>
        </header>
        <form>
          <label htmlFor="value">
            Valor
            <input
              id="value"
              type="text"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="expenseType">
            Moeda
            <select id="expenseType">
              {
                curr.map((currency, index) => (
                  <option key={ index }>
                    { currency.code }
                  </option>
                ))
              }
            </select>
          </label>
          <PaymentMethod />
          <Categories />
          <label htmlFor="description">
            Descrição
            <input
              id="description"
              type="text"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
        </form>
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  dispatchCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ email: state.user.email,
  curr: state.wallet.currencies });
const mapDispatchToProps = (dispatch) => ({
  dispatchCurrencies: (state) => dispatch(currencies(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
