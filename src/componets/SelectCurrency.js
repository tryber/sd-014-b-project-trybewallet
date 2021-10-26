import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SelectCurrency extends React.Component {
  render() {
    const { currencies, value, handleChange} = this.props;
    const label = "currency";
    const data = Object.keys(currencies).filter((cur) => cur !== 'USDT');
    return (
      <label htmlFor={ label }>
      Moeda:
      <select name={ label } id={ label } value={ value } onChange={ handleChange }>
        { data.map((item) => (<option key={ item } value={ item }>{ item }</option>)) }
      </select>
      </label>
    );
  }
}

SelectCurrency.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
  
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(SelectCurrency);
  