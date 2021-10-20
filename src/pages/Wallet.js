import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency } from '../actions';
import Header from '../components/Header';
import Forms from '../components/Forms';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrencyApi } = this.props;
    fetchCurrencyApi();
  }

  render() {
    return (
      <div>
        <Header />
        <Forms />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencyApi: () => dispatch(fetchCurrency()),
});

Wallet.propTypes = {
  fetchCurrencyApi: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
