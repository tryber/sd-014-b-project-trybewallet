import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { userEmail } = this.props;
    return (
      <header className="header">
        <h4>TrybeWallet</h4>
        <p data-testid="email-field">{userEmail}</p>
        <p data-testid="total-field">{userEmail}</p>
        <p data-testid="header-currency-field">{userEmail}</p>
      </header>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email });

export default connect(mapStateToProps, null)(Header);
