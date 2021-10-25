import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { userEmail, expenses } = this.props;
    return (
      <div>
        <span data-testid="email-field">{ userEmail }</span>
        <span data-testid="total-field">
          {
            expenses.reduce((acc, curr) => {
              acc += (curr.exchangeRates[curr.currency].ask * curr.value);
              return acc;
            }, 0).toFixed([2])
          }
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
