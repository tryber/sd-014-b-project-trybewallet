import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './style.css';

class Header extends React.Component {
  render() {
    const { email, spentTotal } = this.props;
    return (
      <header className="header">
        <h1 className="logo">Trybe</h1>
        <span
          data-testid="email-field"
        >
          {`Email: ${email}`}
        </span>
        <span>
          Despesa Total: R$
          <span data-testid="total-field">{ spentTotal }</span>
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
  spentTotal: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    email: state.user.email,
    spentTotal: state.wallet.spentTotal,
  };
}

export default connect(mapStateToProps)(Header);
