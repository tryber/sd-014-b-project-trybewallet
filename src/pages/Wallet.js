import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrenciesApiThunk } from '../actions/currencies';

class Wallet extends React.Component {
  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  render() {
    const { currencies, isLoading } = this.props;
    return isLoading ? <p>Loading...</p>
      : (
        <div>
          <h1>My Currenciess</h1>
          <form>
            <label htmlFor="currencys">
              Moedas
              <select id="currencys">
                {currencies.map((c) => c !== 'USDT' && (
                  <option key={ c }>
                    {c}
                  </option>))}
              </select>
            </label>
          </form>

        </div>
      );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isLoading: state.wallet.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(getCurrenciesApiThunk()),
});

Wallet.propTypes = {
  currencies: PropTypes.array,
  isLoading: PropTypes.bool,
  setCurrencies: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
