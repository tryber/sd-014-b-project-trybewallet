import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { userEmail, expenses } = this.props;
    return (
      <header>
        <div data-testid="email-field">{ userEmail }</div>
        <div data-testid="total-field">{expenses.length}</div>
        <div data-testid="header-currency-field">BRL</div>
      </header>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapDispatchToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapDispatchToProps, null)(Header);
