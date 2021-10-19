import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './style.css';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header className="header">
        <h1 className="logo">Trybe</h1>
        <span
          data-testid="email-field"
        >
          {`Email: ${email}`}
        </span>
        <span
          data-testid="total-field"
        >
          Despesa Total: 0
        </span>
        <span
          data-testid="header-currency-field"
        >
          BRL
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return { email: state.user.email };
}

export default connect(mapStateToProps)(Header);
