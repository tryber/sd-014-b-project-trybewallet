import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './header.css';

class Header extends Component {
  render() {
    const { emailUser, totalField } = this.props;
    return (
      <header className="header">
        <div className="title">
          <h1>Tribewallet</h1>
        </div>
        <div className="header-email">
          <div>
            <h3 data-testid="email-field">
              Email:
              {' '}
              {emailUser}
            </h3>
          </div>
          <div className="field">
            <h3>
              Despesa total:
              <span data-testid="total-field">
                {' R$ '}
                {totalField}
              </span>
            </h3>
            <h3 data-testid="header-currency-field">BRL</h3>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  emailUser: PropTypes.func.isRequired,
  totalField: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  emailUser: state.user.email,
  totalField: state.wallet.totalExpenses,
});

export default connect(mapStateToProps, null)(Header);
