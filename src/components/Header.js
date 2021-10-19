import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email } = this.props;

    return (
      <header>
        <span>
          <h1 data-testid="email-field">{email}</h1>
        </span>
        <span>
          <h2 data-testid="total-field">Despesa Total: 0</h2>
        </span>
        <span data-testid="header-currency-field">
          <h2>BRL</h2>
        </span>
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
