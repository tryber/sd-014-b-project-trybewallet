import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { emailInput } = this.props;
    const { email } = emailInput;
    return (
      <header>
        <div>
          <p data-testid="email-field">
            {`Email: ${email}`}
          </p>
        </div>
        <div>
          <p data-testid="total-field">
            {`Despesa total: R$${0}`}
          </p>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  emailInput: state.user,
});

Header.propTypes = {
  emailInput: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(Header);
