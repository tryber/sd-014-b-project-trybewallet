import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { requestAPIMoney, salveFormSpent } from '../actions';

import ButtonAdd from '../components/ButtonAdd';
import Select from '../components/Select';
import SelectCoins from '../components/SelectCoins';
import SelectMethod from '../components/SelectMethod';

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
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const { fetchMoney } = this.props;
    const response = await fetchMoney();
    return response;
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  async handleClick() {
    const { id, value, description, currency, method, tag } = this.state;

    const { inputForm, fetchMoney } = this.props;
    const response = await fetchMoney();
    const exchangeRates = await response.payload;

    this.setState((prevState) => ({ id: prevState.id + 1 }));

    inputForm({ id, value, description, currency, method, tag, exchangeRates });

    this.setState({
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    });
  }

  render() {
    const { userEmail, currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <header>
        <h3 data-testid="email-field">{ userEmail }</h3>
        <form>
          <label htmlFor="money-by">
            Valor:
            <input
              type="number"
              id="money-by"
              name="value"
              value={ value }
              onChange={ this.handleChange }
              data-testid="total-field"
            />
          </label>
          <span data-testid="header-currency-field">BRL</span>
          <SelectCoins
            labelhtmlfor="moeda"
            description="Moeda"
            currencies={ currencies }
            value={ currency }
            onChange={ this.handleChange }
          />
          <SelectMethod value={ method } onChange={ this.handleChange } />
          <Select
            value={ tag }
            onChange={ this.handleChange }
          />
          <label htmlFor="descrição">
            Descrição:
            <input
              type="text"
              id="descrição"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          <ButtonAdd onClick={ this.handleClick } />
        </form>
      </header>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
  fetchMoney: PropTypes.func,
  currencies: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoney: () => dispatch(requestAPIMoney()),
  inputForm: (state) => dispatch(salveFormSpent(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
