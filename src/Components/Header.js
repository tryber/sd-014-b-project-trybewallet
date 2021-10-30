import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './header.css';

class Header extends Component {
  constructor() {
    super();
    this.takeStateExpenses = this.takeStateExpenses.bind(this);
  }

  // Referência: https://github.com/tryber/sd-014-b-project-trybewallet/blob/lucas-accurcio-project-trybewallet/src/components/Header.js

  takeStateExpenses() {
    const { arrayExpenses } = this.props;
    const totalField = arrayExpenses.reduce((acc, { value, exchangeRates, currency }) => {
      const result = acc + (value * exchangeRates[currency].ask);
      return result;
    }, 0);
    return totalField !== 0 ? totalField.toFixed(2) : 0;
  }

  render() {
    const { emailUser } = this.props;
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
              { emailUser }
            </h3>
          </div>
          <div className="field">
            <h3>
              Despesa total:
              <span data-testid="total-field">
                {' R$ '}
                { this.takeStateExpenses() }
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
  arrayExpenses: PropTypes.shape({ reduce: PropTypes.func }).isRequired,
};

const mapStateToProps = (state) => ({
  emailUser: state.user.email,
  arrayExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
