import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <section data-testid="email-field">{email}</section>
        <section data-testid="total-field">0</section>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapstateToProps = ({ user }) => ({ email: user.email });

export default connect(mapstateToProps)(Header);
