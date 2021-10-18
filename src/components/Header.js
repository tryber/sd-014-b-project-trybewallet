import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { emailFromGlobalState } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          { `Email: ${emailFromGlobalState}` }
        </p>
        <section>
          Despesa total:
          <span data-testid="total-field">
            0
          </span>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </section>
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
