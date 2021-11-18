import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { fetchCurrencyData } from '../actions';
import DataTable from '../components/DataTable';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    return (
      <section>
        <Header />
        <DataTable />
      </section>
    );
  }
}

Wallet.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencyData()),
});

export default connect(null, mapDispatchToProps)(Wallet);
