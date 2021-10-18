import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { emailFromGlobalState } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          { emailFromGlobalState }
        </p>
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

const mapStateToProps = (state) => ({
  emailFromGlobalState: state.user.email,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  emailFromGlobalState: PropTypes.string.isRequired,
};
