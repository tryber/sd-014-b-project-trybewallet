import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { getCurrenciesApiThunk } from '../actions/currencies';

class Wallet extends React.Component {
  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  render() {
    const { currencies, isLoading } = this.props;
    return isLoading ? <Header />
      : (
        <>
          <Header />
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

        </>
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
