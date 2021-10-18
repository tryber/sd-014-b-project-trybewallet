import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import AddExpenseForm from '../components/AddExpenseForm';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      totalExpense: 0,
      newExpense: {
        amount: 0,
        description: '',
        currency: '',
        paymentMethod: '',
        tag: '',
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState((state) => ({
      newExpense: {
        ...state.newExpense,
        [name]: value,
      },
    }));
  }

  render() {
    const { email } = this.props;
    const { totalExpense, newExpense } = this.state;
    return (
      <div>
        <Header userEmail={ email } totalExpense={ totalExpense } />
        <AddExpenseForm newExpense={ newExpense } onChange={ this.handleChange } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
