import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import {
  changeWallet as changeWalletAction,
  getCoinsOfApi as getCoinsOfApiAction,
} from '../actions';
import CoinOptions from './CoinOptions';
import FormInputs from './FormInputs';
import PaymentOptions from './PaymentOptions';
import TagOptions from './TagOptions';

class ExpenseForm extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getCoinsOfApi } = this.props;
    getCoinsOfApi();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  increaseId() {
    const { id } = this.state;
    this.setState({
      id: id + 1,
    });
  }

  render() {
    const { currencies, changeWallet } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const values = {
      value,
      description,
    };

    return (
      <form>
        <fieldset>
          <FormInputs handleChange={ this.handleChange } value={ values } />
          <CoinOptions
            currencies={ currencies }
            handleChange={ this.handleChange }
            value={ currency }
          />
          <PaymentOptions handleChange={ this.handleChange } value={ method } />
          <TagOptions handleChange={ this.handleChange } value={ tag } />
          <button
            type="submit"
            onClick={ (e) => {
              e.preventDefault();
              changeWallet(currencies, { ...this.state, exchangeRates: currencies });
              this.increaseId();
            } }
          >
            Adicionar Despesa
          </button>
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCoinsOfApi: () => dispatch(getCoinsOfApiAction()),
  changeWallet: (currencies, expenses) => (
    dispatch(changeWalletAction(currencies, expenses))),
});

ExpenseForm.propTypes = {
  getCoinsOfApi: PropTypes.func,
  changeWallet: PropTypes.func,
  currencies: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
