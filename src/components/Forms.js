import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrenciesAPI, sendWalletExpenses } from '../actions';
import fetchCoins from '../api/coins';
import Select from './Select';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      id: 0,
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  componentDidMount() {
    const { getCoins } = this.props;
    getCoins();
  }

  async onSubmitForm() {
    const { dispatchSetValue } = this.props;
    const coins = await fetchCoins();
    this.setState({
      exchangeRates: coins,
    });
    dispatchSetValue(this.state);
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { coins } = this.props;
    const { tag, method, description, currency, value } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="input-expense">
            Valor
            <input
              value={ value }
              onChange={ this.handleChange }
              type="number"
              id="input-expense"
              name="value"
            />
          </label>
          <Select
            tag={ tag }
            method={ method }
            currency={ currency }
            coins={ coins }
            onChange={ this.handleChange }
          />

          <label htmlFor="input-description">
            Descrição
            <input
              value={ description }
              id="input-description"
              name="description"
              type="text"
              onChange={ this.handleChange }
            />
          </label>
        </form>
        <button onClick={ this.onSubmitForm } type="button">Adicionar despesas</button>
      </div>
    );
  }
}

Forms.propTypes = {
  getCoins: PropTypes.func.isRequired,
  coins: PropTypes.arrayOf(PropTypes.any).isRequired,
  dispatchSetValue: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  coins: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCoins: () => dispatch(fetchCurrenciesAPI()),
  dispatchSetValue: (payload) => dispatch(sendWalletExpenses(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
