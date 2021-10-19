import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Form from '../components/Form';
import Header from '../components/Header';
import Table from '../components/Table';

import { fetchEconomiaAPI } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  render() {
    return (
      <div>
        <Header />
        <Form />
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchEconomiaAPI()),
});

export default connect(null, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  fetchCurrencies: PropTypes.func.isRequired,
};

Wallet.defaultProps = {
};
