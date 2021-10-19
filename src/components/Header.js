import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { currency, email, total } = this.props;
    return (
      <header>
        <p>Email:</p>
        <span data-testid="email-field">{ email }</span>
        <p>Despesa Total:</p>
        <span data-testid="total-field">{ total }</span>
        <span data-testid="header-currency-field">{ currency }</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.total,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  currency: PropTypes.string,
  email: PropTypes.string,
  total: PropTypes.number,
};

Header.defaultProps = {
  currency: 'BRL',
  email: '',
  total: 0.00,
};
