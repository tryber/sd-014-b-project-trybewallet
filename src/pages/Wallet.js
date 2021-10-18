import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormWallet from '../components/formWallet';
import { fetchAPI } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.startFetch = this.startFetch.bind(this);
  }

  componentDidMount() {
    this.startFetch();
  }

  async startFetch() {
    const { getMoeda } = this.props;
    await getMoeda();
  }

  render() {
    const { email, expenses } = this.props;
    const finalValue = expenses.reduce((acc, cur) => {
      acc += cur.value * cur.exchangeRates[cur.currency].ask;
      return acc;
    }, 0);
    return (
      <div>
        TrybeWallet
        <header data-testid="email-field">{ email }</header>
        <p data-testid="total-field">{finalValue}</p>
        <p data-testid="header-currency-field">BRL</p>
        <FormWallet />
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  getMoeda: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getMoeda: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
