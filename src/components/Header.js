import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { userInfo } = this.props;
    return (
      <div>
        <h3 data-testid="email-field">{ userInfo }</h3>
        <h3 data-testid="total-field">0</h3>
        <h3 data-testid="header-currency-field">BRL</h3>
      </div>
    );
  }
}

Header.propTypes = {
  userInfo: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({ userInfo: state.user.email });

export default connect(mapStateToProps)(Header);
