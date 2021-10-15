import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../actions';

class SelectCurrencyForm extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  render() {
    const { currencies, onChange, value, name } = this.props;
    return (
      <label htmlFor="currency-form-label">
        Moeda
        <select
          id="currency-form-label"
          onChange={ onChange }
          value={ value }
          name={ name }
        >
          {
            Object.keys(currencies)
              .filter((eachCoin) => eachCoin !== 'USDT')
              .map((eachCurrency) => (
                <option value={ eachCurrency } key={ eachCurrency }>
                  {' '}
                  {eachCurrency}
                  {' '}
                </option>))
          }
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

SelectCurrencyForm.propTypes = {
  dispatch: PropTypes.objectOf(PropTypes.any).isRequired,
  currencies: PropTypes.objectOf(PropTypes.any).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(SelectCurrencyForm);
