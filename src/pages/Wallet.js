import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import WalletTable from '../components/WalletTable';

class Wallet extends React.Component {
  render() {
    const { expensesFromGlobalState } = this.props;
    return (
      <>
        <Header />
        <WalletForm />
        { expensesFromGlobalState.length === 0 ? '' : <WalletTable /> }
      </>
    );
  }
}

const mapStateToProps = (state) => (
  {
    expensesFromGlobalState: state.wallet.expenses,
  }
);

Wallet.propTypes = {
  expensesFromGlobalState: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Wallet);
