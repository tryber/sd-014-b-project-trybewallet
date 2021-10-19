import React from 'react';
import Header from '../components/Header';
import AddExpense from '../components/AddExpense';
import { saveTotalExpenses } from '../redux/actions';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <>
        <Header />
        <AddExpense />
      </>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
