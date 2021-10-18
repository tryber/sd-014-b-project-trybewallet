import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { valueHelper } from './helpers/ValueHelper';

class Header extends React.Component {
  render() {
    const { email, totalValue } = this.props;
    return (
      <header className="header">
        <span data-testid="email-field">{email}</span>
        <span data-testid="total-field">
          { totalValue
            .reduce((prev, curr) => (
              valueHelper(prev) + (Number(curr
                .value) * Number(curr.exchangeRates[curr.currency].ask))
            ), 0) }
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalValue: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalValue: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Header);
