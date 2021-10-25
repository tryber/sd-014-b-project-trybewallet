import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        TrybeWallet
        <div data-testid="email-field">
          { email }
        </div>
        <div data-testid="total-field">
          Despesa total: R$ 0
        </div>
        <div data-testid="header-currency-field">
          BRL
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
