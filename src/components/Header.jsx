import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { globalStateEmail } = this.props;
    return (
      <header data-testid="email-field">
        <div>{ globalStateEmail }</div>
        <div data-testid="total-field">0</div>
        <div data-testid="header-currency-field">BRL</div>
      </header>
    );
  }
}

Header.propTypes = {
  globalStateEmail: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    globalStateEmail: state.user.email,
  };
}
export default connect(mapStateToProps)(Header);
