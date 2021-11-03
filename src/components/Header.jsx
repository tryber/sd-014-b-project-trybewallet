import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      currency: 'BRL',
    };
  }

  render() {
    const { email, total } = this.props;
    const { currency } = this.state;
    return (
      <header>
        <h1 data-testid="email-field">{email}</h1>
        <h1 data-testid="header-currency-field">{currency}</h1>
        <h1
          data-testid="total-field"
        >
          { total.reduce((acc, el) => acc + el, 0).toFixed(2) }
        </h1>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.arrayOf(Number),
};

Header.defaultProps = {
  total: [],
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.total,
});

export default connect(mapStateToProps, null)(Header);
