import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../Components/Form';
import Header from '../Components/Header';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moeda: 'BRL',
    };
  }

  render() {
    const { email, total } = this.props;
    const { moeda } = this.state;
    return (
      <div>
        <Header email={ email } total={ total } moeda={ moeda } />
        <Form />
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

function calculateTotal(state) {
  if (state.wallet.expenses && state.wallet.expenses.length > 0) {
    let total = 0;
    let rate;
    state.wallet.expenses.forEach((item) => {
      rate = item.currency;
      total += item.value * Number(item.exchangeRates[rate].ask);
    });
    return total;
  }
  return 0;
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: calculateTotal(state),
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (e) => dispatch(addExpenseAction(e)),
  editExpense: (e) => dispatch(editExpenseAction(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
