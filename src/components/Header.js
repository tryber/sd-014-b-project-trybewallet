import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, total } = this.props;
    return (
      <header>
        <div data-testid="email-field">
          <span>
            Email:
            { email }
          </span>
        </div>
        <div data-testid="total-field">
          <span>Total: R$ </span>
          { !total ? '0' : total }
        </div>
        <div data-testid="header-currency-field">
          <span>BRL</span>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ // Faço o map do estado e pego o email para utilizar como props
  email: state.user.email,
  total: state.wallet.total,
});

export default connect(mapStateToProps, null)(Header);
