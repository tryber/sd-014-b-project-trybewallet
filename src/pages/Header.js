import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { gettingEmail } = this.props;
    return (
      <header>
        <span data-testid="email-field">{gettingEmail}</span>
        <span data-testid="total-field">0</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  gettingEmail: state.user.email,
});

Header.propTypes = {
  gettingEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
