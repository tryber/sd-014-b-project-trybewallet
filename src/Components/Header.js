import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <div>
          <h3 data-testid="email-field">
            { email }
          </h3>
          <h3>
            Despesa total gerada:
            <span data-testid="total-field">
              0
            </span>
          </h3>
          <h3>
            Cambio usada:
            <span data-testid="header-currency-field">
              BRL
            </span>
          </h3>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
