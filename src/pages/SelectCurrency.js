import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../actions';

class SelectCurrency extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  render() {
    const { currencies } = this.props;
    return (
      <label htmlFor="moeda">
        Moeda
        <select id="moeda">
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

SelectCurrency.propTypes = {
  dispatch: PropTypes.objectOf(PropTypes.any).isRequired,
  currencies: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, null)(SelectCurrency);
