import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../actions';

class SelectCurrency extends React.Component {
  componentDidMount() {
    const { currenciesDispatch } = this.props;
    currenciesDispatch();
  }

  render() {
    const { currencies, onChange } = this.props;
    return (
      <label htmlFor="currency">
        Moeda
        <select id="currency" onChange={ onChange }>
          Moeda
          {Object.keys(currencies)
            .filter((coin) => coin !== 'USDT')
            .map((coin) => <option key={ coin }>{coin}</option>)}
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  currenciesDispatch: () => dispatch(fetchCurrencies()),
});

SelectCurrency.propTypes = {
  currenciesDispatch: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.any).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectCurrency);
