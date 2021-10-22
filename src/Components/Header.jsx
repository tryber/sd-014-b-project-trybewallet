import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <h2 data-testid="email-field">
          Email:
          {' '}
          {email}
        </h2>
        <p data-testid="total-field">
          0
        </p>
        <p data-testid="header-currency-field">
          BRL
        </p>
      </header>
    );
  }
}

const mapStateToProps = ({ user: { email } }) => ({
  email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
