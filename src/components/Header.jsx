import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { globalStateEmail, total } = this.props;
    console.log(total);
    return (
      <header data-testid="email-field">
        <div>{ globalStateEmail }</div>
        <div data-testid="total-field">
          { total.reduce((acc, {
            value,
            currency,
            exchangeRates }) => acc + parseFloat(value) * exchangeRates[currency].ask, 0)}
        </div>
        <div data-testid="header-currency-field">BRL</div>
      </header>
    );
  }
}

Header.propTypes = {
  globalStateEmail: PropTypes.func.isRequired,
  total: PropTypes.shape({
    reduce: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  console.log(state.wallet.expenses);
  return {
    globalStateEmail: state.user.email,
    total: state.wallet.expenses,
  };
}
export default connect(mapStateToProps)(Header);
