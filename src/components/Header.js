import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export function round2Digits(number) {
  return Math.round((Number(number) + Number.EPSILON) * 100) / 100;
}

class Header extends React.Component {
  render() {
    const { email } = this.props;
    let { total = 0 } = this.props;

    total = round2Digits(total);
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ total }</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  total: state.wallet.total,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number,
};

Header.defaultProps = {
  total: 0,
};

export default connect(mapStateToProps)(Header);
