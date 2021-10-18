import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { globalState: { user: { email } } } = this.props;
    const totalExpenses = 0;
    const exchange = 'BRL';
    return (
      <header>
        <span data-testid="email-field">{email}</span>
        <span data-testid="total-field">{totalExpenses}</span>
        <span data-testid="header-currency-field">{exchange}</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  globalState: state,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  user: PropTypes.string.isRequired,
  globalState: PropTypes.objectOf(PropTypes.object).isRequired,
};
