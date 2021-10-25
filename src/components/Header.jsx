import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <>
        <Link to="/">
          Home
        </Link>
        <div>
          <p data-testid="email-field">
            Email:
            {email}
          </p>
        </div>
        <div>
          <p>Despesa Total:</p>
          <p data-testid="total-field">
            {0}
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </>
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
