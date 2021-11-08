import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, total } = this.props;

    return (
      <header>
        <div data-testid="email-field">
          <p>
            Email:
            { email }
          </p>
        </div>
        <div data-testid="total-field">
          <p>
            Total: R$
          </p>
          { !total ? '0' : total }
        </div>
        <div data-testid="header-currency-field">
          <p>
            BRL
          </p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.total,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
