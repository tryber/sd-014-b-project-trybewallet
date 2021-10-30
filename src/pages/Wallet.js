import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';
import Header from '../components/Header';
import AddExpense from '../components/AddExpense';
import ExpensesTable from '../components/ExpensesTable';
import EditExpense from '../components/EditExpense';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      isEditing: false,
      currentlyEditing: undefined,
      id: undefined,
    };

    this.handleEditing = this.handleEditing.bind(this);
  }

  handleEditing(id) {
    const { expenses } = this.props;
    const currentlyEditing = expenses.find((exp) => exp.id === id);
    this.setState((prevState) => ({
      isEditing: !prevState.isEditing,
      id,
      currentlyEditing,
    }));
  }

  render() {
    const { isEditing, id, currentlyEditing } = this.state;
    return (
      <>
        <Header />
        { isEditing 
          ? <EditExpense id={ id } expense={ currentlyEditing } /> 
          : <AddExpense /> }
        <ExpensesTable handleEditing={ this.handleEditing } />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
};

Wallet.defaultProps = {
  expenses: [],
};

export default connect(mapStateToProps, null)(Wallet);
