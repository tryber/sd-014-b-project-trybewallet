import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import AddExpenseForm from '../components/AddExpenseForm';
import { thunkCurrencies } from '../actions';

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

  componentDidMount() {
    const { importedThunk } = this.props;
    importedThunk();
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
    const { email, error } = this.props;
    const { totalExpense, newExpense } = this.state;
    if (error) console.error(error);
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
  error: state.wallet.error,
});

const mapDispatchToProps = (dispatch) => ({
  importedThunk: () => dispatch(thunkCurrencies()),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  importedThunk: PropTypes.func.isRequired,
  error: PropTypes.string,
};

Wallet.defaultProps = {
  error: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
