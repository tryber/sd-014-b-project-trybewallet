import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { user } = this.props;
    const total = 0;
    return (
      <div>
        <span data-testid="email-field">{ user }</span>
        <span data-testid="total-field">{total}</span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

Header.propTypes = {
  user: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.user.email,
  };
}

export default connect(mapStateToProps)(Header);
