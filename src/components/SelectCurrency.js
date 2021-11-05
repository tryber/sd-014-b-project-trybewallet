import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectCurrency extends Component {
  render() {
    const { currency, value, onChange } = this.props;
    return (
      <label htmlFor="moeda">
        Moeda
        <select id="moeda" name="currency" value={ value } onChange={ onChange }>
          <option value={ currency.USD.code }>{ currency.USD.code }</option>
          <option value={ currency.CAD.code }>{ currency.CAD.code }</option>
          <option value={ currency.EUR.code }>{ currency.EUR.code }</option>
          <option value={ currency.GBP.code }>{ currency.GBP.code }</option>
          <option value={ currency.ARS.code }>{ currency.ARS.code }</option>
          <option value={ currency.BTC.code }>{ currency.BTC.code }</option>
          <option value={ currency.LTC.code }>{ currency.LTC.code }</option>
          <option value={ currency.JPY.code }>{ currency.JPY.code }</option>
          <option value={ currency.CHF.code }>{ currency.CHF.code }</option>
          <option value={ currency.AUD.code }>{ currency.AUD.code }</option>
          <option value={ currency.CNY.code }>{ currency.CNY.code }</option>
          <option value={ currency.ILS.code }>{ currency.ILS.code }</option>
          <option value={ currency.ETH.code }>{ currency.ETH.code }</option>
          <option value={ currency.XRP.code }>{ currency.XRP.code }</option>
        </select>
      </label>
    );
  }
}

SelectCurrency.propTypes = {
  currency: PropTypes.objectOf((
    PropTypes.any
  )).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currency: state.currency,
});

export default connect(mapStateToProps)(SelectCurrency);
