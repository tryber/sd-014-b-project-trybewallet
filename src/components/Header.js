import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import mapTotalValue from '../helpers/ValueHelper';

class Header extends React.Component {
  render() {
    const { email, totalValue } = this.props;
    return (
      <header className="header">
        <span data-testid="email-field">{`Email: ${email}`}</span>
        <div>
          <span data-testid="total-field">
            Despesa total: R$
            { ' ' }
            { mapTotalValue(totalValue) }
            { ' ' }
          </span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
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
