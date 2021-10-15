import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <div data-testid="email-field">
          <p>
            Email:
            { email }
          </p>
        </div>
        <div data-testid="total-field">
          <p>Total: 0</p>
        </div>
        <div data-testid="header-currency-field">
          <p>BRL</p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ // Faço o map do estado e pego o email para utilizar como props
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Header);
