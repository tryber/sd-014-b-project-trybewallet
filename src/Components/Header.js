import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Categories extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const total = expenses.reduce((acc, curr) => {
      acc += curr.value * curr.exchangeRates[curr.currency].ask;
      return acc;
    }, 0);
    return (
      <header>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="header-currency-field">BRL</span>
        <span data-testid="total-field">{ total }</span>
      </header>
    );
  }
}

Categories.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Categories);
