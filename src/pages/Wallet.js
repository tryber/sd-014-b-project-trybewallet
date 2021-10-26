import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { fetchCurrency } from '../actions';
import Form from '../components/Form';

class Wallet extends React.Component {
  componentDidMount = async () => {
    const { getCurrency } = this.props;
    await getCurrency();
  }

  render() {
    return (
      <>
        <Header />
        <h1>carteira</h1>
        <Form />
      </>
    );
  }
}

Wallet.propTypes = {
  getCurrency: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrency: (state) => dispatch(fetchCurrency(state)),
});

export default connect(null, mapDispatchToProps)(Wallet);
