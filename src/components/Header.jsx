import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  update = () => this.forceUpdate();

  render() {
    const { globalState:
      { user: { email }, wallet: { expenses } } } = this.props;
    const total = expenses.reduce(
      (acc, expense) => acc + parseInt(expense.valor, 10), 0,
    );
    const { moeda } = expenses[0];
    console.log(total, moeda);
    return (
      <header>
        <span data-testid="email-field">{email}</span>
        <span data-testid="total-field">{total}</span>
        <span data-testid="header-currency-field">{moeda}</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  globalState: state,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  globalState: PropTypes.objectOf(PropTypes.object).isRequired,
};
